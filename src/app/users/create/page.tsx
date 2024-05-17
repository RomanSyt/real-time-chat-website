"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import type { FormEvent, ChangeEvent } from "react";

const initUser: Partial<User> = { name: "", last_name: "" };

const CreateUserPage = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const [user, setUser] = useState(initUser);

  const isMutating = isFetching || isPending;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsFetching(true);

    const api = await fetch("http://127.0.0.1:3500/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    await api.json();

    setIsFetching(false);

    startTransition(() => router.push("/users"));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
          disabled={isMutating}
          placeholder="Name"
          autoFocus
        />
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={user.last_name}
          onChange={handleChange}
          disabled={isMutating}
          placeholder="Last name"
        />

        <button type="submit" disabled={isMutating}>
          Submit
        </button>
      </form>
    </main>
  );
};

export default CreateUserPage;

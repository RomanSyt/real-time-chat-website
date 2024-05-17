"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const initUser: Partial<User> = { name: "", last_name: "" };

const CreateUserPage = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const [user, setUser] = useState(initUser);

  const isMutating = isFetching || isPending;

  return <main></main>;
};

export default CreateUserPage;

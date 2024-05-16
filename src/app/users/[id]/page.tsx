import { Props } from "./types";
import { Metadata } from "next";

import { fetchUsers } from "@/lib/fetchUsers";
import { fetchUser } from "@/lib/fetchUser";
import { notFound } from "next/navigation";
import Link from "next/link";

export const generateStaticParams = async () => {
  const users = await fetchUsers();

  return users.map(({ id }) => ({
    id,
  }));
};

export const generateMetadata = async ({
  params: { id },
}: Props): Promise<Metadata> => {
  const [user] = await fetchUser(id);

  if (!user) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: `${user.name} ${user.last_name}`,
  };
};

const UserPage = async ({ params: { id } }: Props) => {
  const [user] = await fetchUser(id);

  if (!user) {
    notFound();
  }

  return (
    <main>
      <h1>
        I'm {user.name} {user.last_name}
      </h1>

      <Link href="/users">I want to go back</Link>
    </main>
  );
};

export default UserPage;

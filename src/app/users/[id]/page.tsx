import { Props } from "./types";
import { Metadata } from "next";

import { fetchUsers } from "@/lib/fetchUsers";
import { fetchUser } from "@/lib/fetchUser";
import { notFound } from "next/navigation";

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

  return <main>user</main>;
};

export default UserPage;

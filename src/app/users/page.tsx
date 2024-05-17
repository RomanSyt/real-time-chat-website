import Users from "@/app/components/Users";
import Link from "next/link";

export const revalidate = 0;

const UsersPage = () => {
  return (
    <main>
      <h1>Who are you?</h1>
      <Link href="/users/create">
        Click here if you want to create a new user
      </Link>
      <Users />
    </main>
  );
};

export default UsersPage;

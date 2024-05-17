import Users from "@/app/components/Users";

export const revalidate = 0;

const UsersPage = () => {
  return (
    <main>
      <h1>Who are you?</h1>
      <Users />
    </main>
  );
};

export default UsersPage;

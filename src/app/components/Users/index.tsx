import { fetchUsers } from "@/lib/fetchUsers";

const Users = async () => {
  const users = await fetchUsers();

  return users.map(({ id, name, last_name }) => (
    <div key={id}>
      <h2>
        {name} {last_name}
      </h2>
    </div>
  ));
};

export default Users;

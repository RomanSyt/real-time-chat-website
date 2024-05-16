import { fetchUsers } from "@/lib/fetchUsers";

import Link from "next/link";

const Users = async () => {
  const users = await fetchUsers();

  return users.map(({ id, name, last_name }) => (
    <div key={id}>
      <Link href={`/users/${id}`}>
        I'm {name} {last_name}
      </Link>
    </div>
  ));
};

export default Users;

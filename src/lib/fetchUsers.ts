export const fetchUsers = async () => {
  const api = await fetch(`http://127.0.0.1:3500/users`);

  const users: User[] = await api.json();

  return users;
};

export const fetchUser = async (userId: string) => {
  const api = await fetch(`http://127.0.0.1:3500/users?id=${userId}`);

  const user: User[] = await api.json();

  return user;
};

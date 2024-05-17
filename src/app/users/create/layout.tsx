import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Users page",
  description: "Create User page where you create a new user",
};

export default function CreateUserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

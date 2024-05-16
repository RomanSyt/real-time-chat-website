import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users page",
  description: "Users page where you select who you are",
};

export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

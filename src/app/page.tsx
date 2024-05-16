import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home page",
  description: "Home page",
};

export default function Home() {
  return (
    <main>
      <h1>Welcome to the realtime chat website</h1>
      <Link href="/users">Go to the Users page to define who you are</Link>
    </main>
  );
}

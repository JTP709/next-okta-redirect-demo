import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>
        This is the home page. It is accessible to all users.
      </p>
      <Link href="/protected">Protected</Link>
    </main>
  )
}

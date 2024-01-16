import Link from "next/link";

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <a href="https://kit-test.local:3000">Dashboard</a>
    </div>
  );
}

export default ProtectedPage;

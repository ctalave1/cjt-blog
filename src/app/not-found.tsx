import Link from "next/link"

const NotFound = () => {
  return (
    <section className="grid place-content-center h-screen">
      <h1 className="mb-8 text2xl font-semibold tracking-tighter">404 - Page Not Found</h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Link href="/"></Link>
    </section>
  )
};

export default NotFound;
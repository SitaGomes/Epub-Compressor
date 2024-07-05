import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href={'/'}>Go back</Link>
    </main>
  );
}

import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>CMS Site Template</h1>
      <p>Provider-agnostic content rendering starter.</p>
      <Link href="/entries/article">Browse sample entries</Link>
    </main>
  );
}

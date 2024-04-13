import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <h2>Navigation</h2>
      <Link href="/art-pieces">All Pieces of Art</Link>
      <br />
      <Link href="/.">Spotlight</Link>
    </>
  );
}

import ArtPieceDetails from "@/components/ArtPieceDetails";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  const currentArtPiece = pieces.find((piece) => piece.slug === slug);

  if (!currentArtPiece) {
    return null;
  }
  return (
    <>
      <ArtPieceDetails currentArtPiece={currentArtPiece} />
    </>
  );
}

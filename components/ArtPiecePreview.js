import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({ piece }) {
  const reducedHeight = piece.dimensions.height * 0.25;
  const reducedWidth = piece.dimensions.width * 0.25;

  return (
    <>
      <h3>{piece.name}</h3>
      <FavoriteButton />
      <Image
        src={piece.imageSource}
        alt={`Art ${piece.name} by Artist ${piece.artist}`}
        height={reducedHeight}
        width={reducedWidth}
      />
      <p>{piece.artist}</p>
      <Link href={`/art-pieces/${piece.slug}`}>
        Check out this piece of art in detail
      </Link>
    </>
  );
}

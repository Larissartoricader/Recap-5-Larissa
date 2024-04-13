import Image from "next/image";

export default function ArtPiecePreview({ piece }) {
  const reducedHeight = piece.dimensions.height * 0.25;
  const reducedWidth = piece.dimensions.width * 0.25;

  return (
    <>
      <h3>{piece.name}</h3>
      <Image
        src={piece.imageSource}
        alt={`Art ${piece.name} by Artist ${piece.artist}`}
        height={reducedHeight}
        width={reducedWidth}
      />
      <p>{piece.artist}</p>
    </>
  );
}

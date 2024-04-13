import ArtPieces from "@/components/ArtPieces";

// Criar um componente chamando ArtPieceDetails
// Criar dentro dessa COMPONENTE uma funcao ArtPieceDetail
// Passar para essa funcao Pieces

export default function ArtPiecesPage({ pieces }) {
  return (
    <>
      <ArtPieces pieces={pieces} />
    </>
  );
}

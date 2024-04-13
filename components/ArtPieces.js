import { uid } from "uid";
import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

export default function ArtPieces({ pieces }) {
  const StyledList = styled.ul`
    list-style: none;
  `;
  return (
    <>
      <h2>ArtPieces</h2>
      <StyledList>
        {pieces.map((piece) => (
          <li key={uid()}>
            <ArtPiecePreview piece={piece} />
          </li>
        ))}
      </StyledList>
    </>
  );
}

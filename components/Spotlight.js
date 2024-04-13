import Image from "next/image";
import styled from "styled-components";

const StyledSpotlightBox = styled.article`
  background-color: gray;
`;

export default function Spotlight({ pieces }) {
  // const randomNr = Math.random() * 10;
  // const randomIndexNr = Math.round(randomNr);
  // console.log("Index-Nr of a Piece " + randomIndexNr);
  // const randomPiece = pieces[randomIndexNr];

  const randomPiece = pieces[Math.round(Math.random() * 10)];
  const reducedHeight = randomPiece.dimensions.height * 0.25;
  const reducedWidth = randomPiece.dimensions.width * 0.25;

  return (
    <>
      <StyledSpotlightBox>
        <h2>The Art Spotlight</h2>
        <h3>Artist: {randomPiece.artist}</h3>
        <Image
          src={randomPiece.imageSource}
          alt={`Art ${randomPiece.name} by Artist ${randomPiece.artist}`}
          height={reducedHeight}
          width={reducedWidth}
        />
      </StyledSpotlightBox>
    </>
  );
}

import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

const StyledSpotlightBox = styled.article`
  background-color: gray;
`;

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export default function Spotlight({ pieces, handleFavoritePiece }) {
  const randomNr = getRandomNumber(0, 10);
  const randomIndexNr = Math.round(randomNr);
  console.log("Index-Nr of a Piece " + randomIndexNr);
  const randomPiece = pieces[randomIndexNr];
  const reducedHeight = randomPiece.dimensions.height * 0.2;
  const reducedWidth = randomPiece.dimensions.width * 0.2;

  return (
    <>
      <StyledSpotlightBox>
        <h2>The Art Spotlight</h2>
        <FavoriteButton />
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

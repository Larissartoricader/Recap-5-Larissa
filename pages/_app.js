import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";
import { uid } from "uid";

const fetcher = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) {
      const error = new Error("Uh! Error while fetchting data");
      error.info = response.json();
      error.status = response.status;
      throw error;
    }
    return response.json();
  });

export default function App({ Component, pageProps }) {
  const { data, isLoading, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  const [artPiecesInfo, setArtPiecesInfo] = useState();
  if (error) return <div>Failed to Load!!!</div>;
  if (isLoading) return <div>Still loading... Be patient</div>;
  console.log(data); //original Data

  // The Data should leave the APP with already unique ID.
  const artPiecesWithIds = data.map((piece) => ({
    ...piece,
    id: uid(),
  }));
  console.log(artPiecesWithIds); //It works!

  function handleFavoritePiece(id) {
    console.log("THAT's my Favorite Piece of Art");

    //Which Piece of Art was choosen?
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.id === id);
      //Does the choosen Piece of Art have the isFavorite property inside the object? If YES, the button just change the from yes to no or from no to yes!
      if (info) {
        return artPiecesInfo.map((info) =>
          info.id === id ? { ...info, isFavorite: !info.isFavorite } : info
        );
        //If the choose Piece still does not have the IsFavorite, here It gets the property IsFavorite with the True!
      }
      return [...artPiecesInfo, { id, isFavorite: true }];
    });
    //Is there is no data avaliable, there is a message.
    if (!data) {
      return <h1>...Still Loading</h1>;
    }
    console.log("Is there a new property" + data);
  }

  return (
    <>
      <SWRConfig>
        <GlobalStyle />
        <Layout />
        <Component
          {...pageProps}
          pieces={artPiecesWithIds}
          handleFavoritePiece={handleFavoritePiece}
        />
      </SWRConfig>
    </>
  );
}

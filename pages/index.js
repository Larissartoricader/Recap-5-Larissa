import ArtPieces from "@/components/ArtPieces";
import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading, error } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );

  if (error) return <div>Failed to Load!!!</div>;
  if (isLoading) return <div>Still loading... Be patient</div>;
  console.log(data);

  return (
    <div>
      <h1>Art Gallery App</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}

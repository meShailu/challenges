import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function HomePage() {
  const { data } = useSWR("/api/random-character", fetcher);
  if (!data) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Random Character</h1>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Twitter Name: {data.twitterName}</p>
      <p>Geohash: {data.geohash}</p>
    </div>
  );
}

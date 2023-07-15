import Form from "./components/form";

async function getData() {
  const res = await fetch(`http://localhost:3000/api/photographers`, {
    method: "GET",
  });
  return res.json();
}

async function getData2() {
  const res = await fetch(`http://localhost:3000/api/leagues`, {
    method: "GET",
  });
  return res.json();
}

export default async function Home() {
  const photos = await getData();
  const ligas = await getData2();
  return (
    <main className="min-h-screen flex items-stretch justify-around">
      <Form photos={photos} ligas={ligas} />
    </main>
  );
}

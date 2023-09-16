import { Header } from "@/components/Header";
import { NoteEditor } from "@/components/NoteEditor";

async function getNotes() {
  const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/todolist/records", {cache:"no-cache"});
  const data = await res.json();
  return data;
}

export default async function Page() {
  const {items} = await getNotes();
  return (
 <div> 
  <Header />
  <NoteEditor notedData={items}/>;
  </div>
  )
}

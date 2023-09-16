"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Input = () => {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");
  const handleCreateNote = async () => {
    const res = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/todolist/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: content ,user:user}),
      }
    );
    const data = await res.json();
    setContent("")
    setUser("")
    router.refresh();
    console.log(data)
  };

  return (
    <div className="flex flex-col gap-2 mb-2">
      <div className="flex">
        <input placeholder="Ketik nama Anda" value={user} onChange={(e)=>setUser(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <input placeholder="Ketik todolist" value={content} onChange={(e) => setContent(e.target.value)} />
        <button onClick={handleCreateNote} className="w-fit mx-auto my-2">
          Tambah Todolist
        </button>
      </div>
    </div>
  );
};

"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export const NoteCards = ({ id, content, user }) => {
  const [editMode, setEditMode] = useState(false);
  const [newContent, setNewContent] = useState(content);
  const router = useRouter();
  const handleUpdateNote = async () => {
    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/todolist/records/${id}`,
      {
        method: "PATCH",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({content:newContent})
      }
    );
    const data = await res.json();
    setEditMode(false);
    router.refresh();
  };
  const handleDeleteNote = async () => {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/todolist/records/${id}`,
      {
        method: "DELETE",
      }
    );
    router.refresh();
  };
  return (
    <div className="border-2 p-4 rounded-lg shadow bg-[#eaddcf]">
      {editMode ? (
        <input value={newContent || content} onChange={(e) => setNewContent(e.target.value)} />
      ) : (
        <div className="min-h-[120px]">
          {content} ( <span className="text-xl font-bold">{user}</span> )
        </div>
      )}

      <div className="flex gap-4">
        {editMode ? (
          <button onClick={handleUpdateNote}>Ubah</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Ubah</button>
        )}

        <button onClick={handleDeleteNote}>Hapus</button>
      </div>
    </div>
  );
};

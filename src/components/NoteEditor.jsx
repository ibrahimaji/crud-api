

import { Input } from "./Input";
import { NoteCards } from "./NoteCards";

export const NoteEditor = ({notedData}) => {
  return (
    <div>
      <Input />
      <div>
        {notedData.map(({id, content, user})=>{
          return <NoteCards key={id} id={id} content={content} user={user}/>;
        })}
      </div>
      
    </div>
  );
};

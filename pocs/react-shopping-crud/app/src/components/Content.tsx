import React from "react";

type ContentProps = {
  list: { id: number; checked: boolean; item: string }[];
  handleCheck: (id: number) => Promise<void>;
  handleDelete: (id: number) => Promise<void>;
};

const Content: React.FC<ContentProps> = ({ list, handleCheck, handleDelete }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <ul style={{ listStyleType: '', padding: 0, margin: 0 }}>
        {list.map((item) => (
          <><li key={item.id} style={{ margin: '5px 0', textAlign: 'left' }}>{item.item}</li> <button onClick={() => handleDelete(item.id)}>x</button></>
        ))}
      </ul>
    </div>
  );
};

export default Content;
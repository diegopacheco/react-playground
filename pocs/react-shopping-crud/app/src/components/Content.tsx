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
          <div key={item.id}>
            <span>{item.item}</span>
            <button onClick={() => handleDelete(item.id)} style={{ marginLeft: '10px' }}>x</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Content;
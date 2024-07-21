import React from "react";

type ContentProps = {
  list: { id: number; checked: boolean; item: string }[];
  handleCheck: (id: number) => Promise<void>;
  handleDelete: (id: number) => Promise<void>;
};

const Content: React.FC<ContentProps> = ({ list, handleCheck, handleDelete }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, width: '100%' }}>
        {list.map((item) => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>{item.item}</span>
            <button onClick={() => handleDelete(item.id)} style={{ marginLeft: 'auto' }}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
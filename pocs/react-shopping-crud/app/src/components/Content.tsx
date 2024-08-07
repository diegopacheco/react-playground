import React from "react";

type ContentProps = {
  list: { id: number; checked: boolean; item: string }[];
  handleCheck: (id: number) => Promise<void>;
  handleDelete: (id: number) => Promise<void>;
};

const Content: React.FC<ContentProps> = ({ list, handleCheck, handleDelete }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {list.map((item) => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', width: '80%' }}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ textAlign: 'left', width: '100%', textDecoration: item.checked ? 'line-through' : 'none' }}>
              {item.item}
            </span>
            <button onClick={() => handleDelete(item.id)} style={{ marginLeft: 'auto' }}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
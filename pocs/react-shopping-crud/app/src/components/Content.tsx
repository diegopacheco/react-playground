import React from "react";

type ContentProps = {
  list: { id: number; checked: boolean; item: string }[];
  handleCheck: (id: number) => Promise<void>;
  handleDelete: (id: number) => Promise<void>;
};

const Content: React.FC<ContentProps> = ({ list, handleCheck, handleDelete }) => {
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>{item.item}</div>
      ))}
    </div>
  );
};

export default Content;
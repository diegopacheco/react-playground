import { useRef } from "react";
import { FormEventHandler } from "react";

const AddList = ({ newItem, setNewItem, handleSubmit }: { newItem: string, setNewItem: Function, handleSubmit: FormEventHandler<HTMLFormElement> }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        autoFocus
        ref={inputRef}
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current && inputRef.current.focus()}
      >
        <label>+</label>
      </button>
    </form>
  );
};

export default AddList;
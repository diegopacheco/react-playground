import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Top from "./components/Top";
import AddList from "./components/AddList";
import { useState, useEffect } from "react";

function App() {
  const API_url = "http://localhost:3500/items";
  const [list, setList] = useState<{ id: number; checked: boolean; item: string }[]>([]);
  const [newItem, setNewItem] = useState("");
  const [, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_url);
        if (!response.ok) throw Error("Error Message");
        const listItem = await response.json();
        setList(listItem);
        setError(null);
      } catch (error) { }
    };
    fetchData();
  }, []);

  // Add new Item to the list
  const addItems = async (item: string) => {
    const id = list.length ? list[list.length - 1].id + 1 : 1;
    const theNewItem = {
      id,
      checked: false,
      item,
    };

    const listItem = [...list, theNewItem];
    setList(listItem);

    const postOptions = {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(theNewItem),
    };

    const result = await fetch(API_url, postOptions);
    if (result) setError(null);
  };

  //  Create a function to update the checked property
  const handleCheck = async (id: number) => {
    const listItem = list.map((item) =>
      item.id === id
        ? {
          ...item,
          checked: !item.checked,
        }
        : item
    );
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    const myitem = listItem.filter((list) => list.id === id);

    const updateOptions = {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        checked: myitem[0].checked,
      }),
    };

    const reqUrl = `${API_url}/${id}`;
    const result = await fetch(reqUrl, updateOptions);
    if (result) setError(null);
  };

  //  create a function to delete an item
  const handleDelete = async (id: number) => {
    const listItem = list.filter((item) => item.id !== id);
    setList(listItem);
    const deleteOptions = {
      method: "DELETE",
    };

    const reqUrl = `${API_url}/${id}`;
    const result = await fetch(reqUrl, deleteOptions);
    if (result) setError(null);
  };

  //  create a function to prevent default submit action
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    addItems(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Top />
      <Content
        list={list}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer list={list} />
      <br/>
      <AddList
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
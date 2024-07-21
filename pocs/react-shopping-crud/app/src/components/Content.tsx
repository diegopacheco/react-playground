const Content = ({ list, handleCheck, handleDelete }) => {
    return (
      <main className="content">
        {list.length ? (
          <ul>
            {list.map((item) => {
              return (
                <li className="list" key={item.id}>
                  <input
                    onChange={() => handleCheck(item.id)}
                    type="checkbox"
                    checked={item.checked}
                  />
  
                  <label onDoubleClick={() => handleCheck(item.id)}>
                    <h3>{item.item}</h3>
                  </label>
  
                  <button onClick={() => handleDelete(item.id)}>X</button>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3
            style={{
              marginTop: "2rem",
            }}
          >
            {" "}
            Empty List{" "}
          </h3>
        )}
      </main>
    );
  };
  
  export default Content;
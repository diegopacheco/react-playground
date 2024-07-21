const Footer = ({ list }) => {
    return (
      <footer className="footer">
        <h3>
          {list.length} List {list.length === 1 ? "Item" : "Items"}{" "}
        </h3>
      </footer>
    );
};
  
export default Footer;
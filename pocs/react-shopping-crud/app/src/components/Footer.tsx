const Footer = ({ list }: { list: any[] }) => {
    return (
      <footer className="footer" style={{ display: 'flex', justifyContent: 'center', 
              alignItems: 'left', textAlign: 'left' }}>
        <b>{list.length}</b> &nbsp; List {list.length === 1 ? "Item" : "Items"}{" "}
      </footer>
    );
};
  
export default Footer;
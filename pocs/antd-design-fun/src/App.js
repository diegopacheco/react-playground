import './App.css';
import { Button, DatePicker } from 'antd';

function App() {
  return (
    <div className="App">
      <main>
        <Button type="primary">PRESS ME</Button>
        <DatePicker placeholder="select date" />
      </main>
    </div>
  );
}

export default App;

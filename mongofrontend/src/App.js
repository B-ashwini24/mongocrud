
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Products from './components/Products';
import Show from './components/Show';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/Products" element={<Products />} />
        <Route path="/show" element={<Show />} />
      
      </Routes>
     
    </div>
  );
}

export default App;

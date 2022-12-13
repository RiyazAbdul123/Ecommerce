import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Products from "./components/Products"
import Product from './components/Product';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Products from "./components/Products"
import Product from './components/Product';
import Home from "./components/Home"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:productId" element={<Product />} />
      </Routes>
    </ BrowserRouter>
  );
}

export default App;

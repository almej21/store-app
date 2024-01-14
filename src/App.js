import Cart from "pages/cart/Cart";
import Home from "pages/home/Home";
import Product from "pages/product/Product";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <AppProvider> */}

        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} index />
          <Route path="/product/:name" element={<Product />} index />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* </AppProvider> */}
      </div>
    </Router>
  );
}

export default App;

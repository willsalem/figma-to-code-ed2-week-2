import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header.js";
import Banner from "../components/banner.js";
import ProductList from "../components/productList.js";
import Collection from "../components/collection.js";
import Footer from "../components/footer.js";
import Product from "./Product.js";
import Cart from "./Cart.js";
import Checkout from "./Checkout.js";
import { CartProvider } from "../components/CartContext.js";
import Thank from "./Thank.js";
import "../pages/styles/App.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          <div style={{ marginTop: "140px" }}>
            {" "}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Banner />
                    <ProductList />
                    <Collection />
                  </>
                }
              />
              <Route path="/product" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/thank" element={<Thank />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;

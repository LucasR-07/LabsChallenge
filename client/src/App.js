import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Catalogo from "./components/Catalogo";
import SearchBar from "./components/SearchBar";
import Loading from './components/Loading'
import "./components/styles/App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProductsResults = (productsSearch) => {
    setProducts(productsSearch);
  };

  if (loading) {
    return (
      <div>
        <Navbar
          getProductsResults={getProductsResults}
          setLoading={setLoading}
        />
        <Loading />
      </div>
    );
  } else if (products.length > 0) {
    return (
      <div>
        <Navbar
          getProductsResults={getProductsResults}
          setLoading={setLoading}
        />
        <div className="container rounded bg-dark text-light shadow-lg">
          <Catalogo productsResult={products} />
          
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar
          getProductsResults={getProductsResults}
          setLoading={setLoading}
        />
        <div className="container rounded bg-dark shadow-lg d-flex justify-content-center containerComponents">
          <SearchBar
            getProductsResults={getProductsResults}
            setLoading={setLoading}
          />
        </div>
      </div>
    );
  }
}

export default App;

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Catalogo from "./components/Catalogo";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import Loading from './components/Loading'
import "./components/styles/App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);

  const getProductsResults = (productsSearch) => {
    setProducts(productsSearch);
  };

  // Get current products
  const indexOfLastProudct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProudct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProudct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
  } else if (currentProducts.length > 0) {
    return (
      <div>
        <Navbar
          getProductsResults={getProductsResults}
          setLoading={setLoading}
        />
        <div className="container rounded bg-dark text-light shadow-lg">
          <Catalogo productsResult={currentProducts} />
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
          />
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

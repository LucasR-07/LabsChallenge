import React, { useState } from "react";
import "./styles/SearchBar.css";

function SearchBar({ getProductsResults, setLoading }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
      .then((res) => res.json())
      .then((resultados) => {
        getProductsResults(resultados.results);
        setLoading(false)
      });
  };

  return (
    <div className="searchContainer p-5 d-flex flex-column justify-content-center">
      
      <div className="text-title">
        <h3>¿Qué productos de Mercado Libre buscas?</h3>
        <hr/>
      </div>

      <div className="d-flex justify-content-center">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar..."
            aria-label="Buscar"
            onChange={handleChange}
          />
          <button
            className="btn btn-outline-warning my-2 my-sm-0"
            type="submit"
          >
            Buscar
          </button>
        </form>
      </div>

    </div>
  );
}

export default SearchBar;

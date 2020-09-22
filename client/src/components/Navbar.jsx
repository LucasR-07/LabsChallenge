import React, { useState } from "react";
import "./styles/Navbar.css";

function Navbar({ getProductsResults, setLoading}) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch(`http://localhost:4000/api/search?search=${search}`)
      .then((res) => res.json())
      .then((resultados) => {
        getProductsResults(resultados);
        setLoading(false)
      });
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          MercadoLibre Catalogo
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <form className="form-inline ml-auto my-2 my-lg-0" onSubmit={handleSubmit}>
            <input
              className="form-control mr-sm-2 navbarSearch"
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
    </nav>
  );
}

export default Navbar;

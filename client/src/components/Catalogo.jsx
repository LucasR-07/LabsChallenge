import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination"
import { Container, Row, Col, Dropdown, ButtonGroup } from "react-bootstrap";
import "./styles/Catalogo.css";

function Catalogo({ productsResult }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [actualizacion, setActualizacion] = useState(false);

  useEffect(() => {
    setProducts(productsResult);
  }, [productsResult]);

  useEffect(() => {
    setActualizacion(false);
  }, [actualizacion]);

  // Get current products
  const indexOfLastProudct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProudct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProudct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelectPrice = (price) => {
    if (price === "expensive") {
      const newProducts = productsResult;
      setProducts(
        newProducts.sort((a, b) => {
          return b.price - a.price;
        })
      );
      setActualizacion(true);
    } else {
      const newProducts = productsResult;
      setProducts(
        newProducts.sort((a, b) => {
          return a.price - b.price;
        })
      );
      setActualizacion(true);
    }
  };

  const handleSelectState = (state) => {
    if (state === "new") {
      setProducts(
        productsResult.filter((product) => product.condition === state)
      );
    } else {
      setProducts(
        productsResult.filter((product) => product.condition === state)
      );
    }
  };

  if (products.length > 0) {
    return (
      <div className="container mt-3 mb-3 pt-1 pb-2">
        <Container>
          <Row>
            <Col>
              <h3>Catalogo</h3>
              <hr className="divider" />
            </Col>

            <Col md={4}>
              <Row>
                <h4 className="ml-3">Ordenar por:</h4>
              </Row>
              <Row>
                <Col>
                  <Dropdown className="mr-4" as={ButtonGroup}>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                      Precio
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onSelect={handleSelectPrice}
                        eventKey="cheaper"
                      >
                        Más barato
                      </Dropdown.Item>
                      <Dropdown.Item
                        onSelect={handleSelectPrice}
                        eventKey="expensive"
                      >
                        Más caro
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                      Estado
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onSelect={handleSelectState}
                        eventKey="new"
                      >
                        Nuevo
                      </Dropdown.Item>
                      <Dropdown.Item
                        onSelect={handleSelectState}
                        eventKey="used"
                      >
                        Usado
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {products &&
            currentProducts.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
        </div>
        <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
          />
      </div>
    );
  } else {
    return (
      <div className="container mt-3 pt-1 pb-2">
        <Container>
          <Row>
            <Col>
              <h3>Catalogo</h3>
              <hr className="divider" />
            </Col>

            <Col md={4}>
              <Row>
                <h4 className="ml-3">Ordenar por:</h4>
              </Row>
              <Row>
                <Col>
                  <Dropdown className="mr-4" as={ButtonGroup}>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                      Precio
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onSelect={handleSelectPrice}
                        eventKey="cheaper"
                      >
                        Más barato
                      </Dropdown.Item>
                      <Dropdown.Item
                        onSelect={handleSelectPrice}
                        eventKey="expensive"
                      >
                        Más caro
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                      Estado
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onSelect={handleSelectState}
                        eventKey="new"
                      >
                        Nuevo
                      </Dropdown.Item>
                      <Dropdown.Item
                        onSelect={handleSelectState}
                        eventKey="used"
                      >
                        Usado
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div>
          <h3>No hay resultados</h3>
        </div>
      </div>
    );
  }
}

export default Catalogo;

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col, Dropdown, ButtonGroup } from 'react-bootstrap';
import './styles/Catalogo.css'

function Catalogo({ productsResult }) {

    const [products, setProducts] = useState([]);
    const [actualizacion, setActualizacion] = useState(false)

    useEffect(() => {
        setProducts(productsResult)
    }, [productsResult])

    useEffect(() => {
        setActualizacion(false)
    }, [actualizacion])

    const handleSelectPrice = (price) => {
        if (price === "expensive") {
            const newProducts = productsResult
            setProducts(
                newProducts.sort((a, b) => {
                    return b.price - a.price;
                })
            )
            setActualizacion(true)
        } else {
            const newProducts = productsResult
            setProducts(
                newProducts.sort((a, b) => {
                    return a.price - b.price;
                })
            )
            setActualizacion(true)
        }
    }

    const handleSelectState = (state) => {
        if (state === "new") {
            setProducts(productsResult.filter(product =>
                product.condition === state
            ))
        } else {
            setProducts(productsResult.filter(product =>
                product.condition === state
            ))
        }
    }

    return (
        <div className="container mt-3 pt-1">
            <Container>
                <Row>
                    <Col>
                        <h3>Catalogo</h3>
                        <hr className="divider"/>
                    </Col>

                    <Col md={4}>
                        <span>Ordenar por:</span>
                        <Dropdown as={ButtonGroup}>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                Precio
                        </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onSelect={handleSelectPrice} eventKey="cheaper">Más barato</Dropdown.Item>
                                <Dropdown.Item onSelect={handleSelectPrice} eventKey="expensive">Más caro</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown as={ButtonGroup}>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                Estado
                        </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onSelect={handleSelectState} eventKey="new">Nuevo</Dropdown.Item>
                                <Dropdown.Item onSelect={handleSelectState} eventKey="used">Usado</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>


            </Container>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {products && products.map((product, index) => {
                    return (
                        <ProductCard key={index} product={product} />
                    )
                })}
            </div>
        </div>
    )
}

export default Catalogo;
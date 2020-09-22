import React from 'react';

function ProductCard(props) {

    const { thumbnail, title, price, currency_id, available_quantity, condition, permalink } = props.product;

    return (
        <div className="col mb-4 mt-4">
            <div className="card mb-3 text-warning bg-dark shadow border-0" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="card-img" src={thumbnail} alt="" />
                        <a href={permalink} className="btn btn-outline-warning mt-5 ml-3 mb-2"  target="_blank" rel="noopener noreferrer">
                            Ver más
                        </a>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{currency_id + " $" + price} </p>
                            <p className="card-text">Estado: {condition}</p>
                            <p className="card-text">Stock: {available_quantity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
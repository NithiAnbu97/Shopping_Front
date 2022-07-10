import React from "react";
import Rating from "./Rating";
import { Link } from 'react-router-dom';

export default function Product({ product }) {
  return (
    <div>
      <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
          {/* <!-- image size 680px by 830px --> */}
          <img className="medium" src={product.image} alt={product.name} />
        </Link>
        <div className="card-body">
        <Link to={`/product/${product._id}`}>
            <h1>{product.name}</h1>
            </Link>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <div className="price">
            <strong>{`Rs.${product.price}`}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

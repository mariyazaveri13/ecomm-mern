import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Ratings from '../components/Ratings';
const Products = ({ product }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/products/${product._id}`}>
          <Card.Img
            src={product.image}
            variant='top'></Card.Img>
        </Link>

        <Card.Body>
          <Link to={`/products/${product._id}`}>
            <Card.Title
              as='h1'
              className='product-title'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as='div'>
            <Ratings
              value={product.rating}
              text={`${product.numReviews} reviews`}></Ratings>
          </Card.Text>
          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Products;

import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap';
import Ratings from '../components/Ratings';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductScreen = () => {
  const [product, setProduct] = useState({});

  const { id: productId } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`/api/products/${productId}`);
        setProduct(data);
      } catch (error) {
        console.log(error.response.data);
      }
    }

    fetchProduct();
  }, [productId]);

  return (
    <>
      <Link
        className='btn btn-light my-3'
        to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image
            src={product.image}
            alt={product.name}
            fluid
          />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Ratings
                value={product.rating}
                text={`${product.numReviews} reviews`}></Ratings>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Description: </strong>
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;

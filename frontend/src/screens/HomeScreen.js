import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Products from '../components/Products';
import React from 'react';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((prod) => (
          <Col
            key={prod._id}
            sm={12}
            md={6}
            lg={4}
            xl={3}>
            <Products product={prod}></Products>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;

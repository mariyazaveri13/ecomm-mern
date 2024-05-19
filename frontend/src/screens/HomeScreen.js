import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Products from '../components/Products';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('/api/products');
        setProducts(data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchProducts();
  }, []);

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

import { Row, Col } from 'react-bootstrap';
import Products from '../components/Products';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant={'danger'}>
          {error?.data?.message || error.error}
        </Message>
      ) : (
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
      )}
    </>
  );
};

export default HomeScreen;

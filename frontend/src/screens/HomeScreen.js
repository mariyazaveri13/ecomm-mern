import { Row, Col } from 'react-bootstrap';
import Products from '../components/Products';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
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

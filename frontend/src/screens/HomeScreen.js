import { Row, Col } from 'react-bootstrap';
import Products from '../components/Products';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';
import { useParams } from 'react-router-dom';
import Paginate from '../components/Paginate.js';

const HomeScreen = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({ pageNumber });

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
            {data.products.map((prod) => (
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
          <Paginate
            pages={data.pages}
            page={data.page}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;

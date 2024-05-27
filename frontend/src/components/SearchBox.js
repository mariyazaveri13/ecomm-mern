import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import React from 'react';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
      setKeyword('');
    } else navigate('/');
  };

  return (
    <Form
      onSubmit={submitHandler}
      className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search products...'
        className='mr-sm-2 ml-sm-5'></Form.Control>
      <Button
        type='submit'
        variant='outline-light'
        className='p-2 mx-2'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;

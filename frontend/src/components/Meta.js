import React from 'react';
import { Helmet } from 'react-helmet-async';
const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name='description'
        content={description}></meta>
      <meta
        name='keywords'
        content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome',
  description: 'We sell best products with highest quality',
  keywords: 'Electronics, buy electronics, cheap electronics',
};

export default Meta;

import React, { ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Layout/Breadcrumb';
import { ProductDetail, ProductReview, RelatedProduct } from '../components/Product';
import $ from 'jquery';
import MainJQuery from '../utils/MainJQuery';

interface Props {}

export default function Product({}: Props): ReactElement {
  useEffect(() => {
    MainJQuery($);
  }, []);
  return (
    <>
      <Breadcrumb title='Product'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>Product name</li>
      </Breadcrumb>

      <ProductDetail />
      <ProductReview />
      <RelatedProduct />
    </>
  );
}

import React, { ReactElement } from 'react';
import { useAppSelector } from '../../app/hooks';
import ProductItem from './ProductItem';

interface Props {}

export default function ProductArea({}: Props): ReactElement {
  const products = useAppSelector((state) => state.product.products);

  return (
      <div className='section position-relative'>
          <div className='container'>
              <div className='row' data-aos='fade-up' data-aos-duration='1000'>
                  <div className='col-12'>
                      <ul className='product-tab-nav nav justify-content-center mb-n3 pb-8 title-border-bottom'>
                          <li className='nav-item mb-3'>
                              <a
                                  className='nav-link active'
                                  data-bs-toggle='tab'
                                  href='#tab-product-best-seller'
                              >
                                  Bestseller
                              </a>
                          </li>
                          <li className='nav-item mb-3'>
                              <a
                                  className='nav-link'
                                  data-bs-toggle='tab'
                                  href='#tab-product-featured'
                              >
                                  Sales popup
                              </a>
                          </li>
                          <li className='nav-item mb-3'>
                              <a className='nav-link' data-bs-toggle='tab' href='#tab-product-all'>
                                  New Arrival
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>

              <div className='row' data-aos='fade-up' data-aos-duration='1100'>
                  <div className='col-12'>
                      <div className='tab-content'>
                          <div className='tab-pane fade show active' id='tab-product-best-seller'>
                              <div className='row mb-n8'>
                                  {products.slice(0, 8).map((product) => (
                                      <div
                                          className='col-12 col-sm-6 col-lg-3 product-wrapper mb-8'
                                          data-aos='fade-up'
                                          data-aos-duration='1000'
                                      >
                                          <ProductItem product={product} />
                                      </div>
                                  ))}
                              </div>
                          </div>

                          <div className='tab-pane fade' id='tab-product-featured'>
                              <div className='row mb-n8'>
                                  {products.slice(0, 8).map((product) => (
                                      <div
                                          className='col-12 col-sm-6 col-lg-3 product-wrapper mb-8'
                                          data-aos='fade-up'
                                          data-aos-duration='1000'
                                      >
                                          <ProductItem product={product} />
                                      </div>
                                  ))}
                              </div>
                          </div>
                          <div className='tab-pane fade' id='tab-product-all'>
                              <div className='row mb-n8'>
                                  {products.slice(0, 8).map((product) => (
                                      <div
                                          className='col-12 col-sm-6 col-lg-3 product-wrapper mb-8'
                                          data-aos='fade-up'
                                          data-aos-duration='1000'
                                      >
                                          <ProductItem product={product} />
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

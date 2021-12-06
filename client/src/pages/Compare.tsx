import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Layout/Breadcrumb';

interface Props {}

export default function Compare({}: Props): ReactElement {
  return (
    <>
      <Breadcrumb title='Compare'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>Compare</li>
      </Breadcrumb>

      <div className='section section-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='compare-page-content-wrap'>
                <div className='compare-table table-responsive'>
                  <table className='table table-bordered mb-0'>
                    <tbody>
                      <tr>
                        <td className='first-column'>Product</td>
                        <td className='product-image-title'>
                          <a href='single-product.html' className='image'>
                            <img className='fit-image' src='assets/images/products/medium-product/4.png' alt='Compare Product' />
                          </a>
                          <a href='#/' className='category mb-1'>
                            Rabbit
                          </a>
                          <a href='single-product.html' className='title'>
                            Rabbits are small mammals
                          </a>
                        </td>
                        <td className='product-image-title'>
                          <a href='single-product.html' className='image'>
                            <img className='fit-image' src='assets/images/products/medium-product/5.png' alt='Compare Product' />
                          </a>
                          <a href='#/' className='category mb-1'>
                            Popinjay
                          </a>
                          <a href='single-product.html' className='title'>
                            A Wooden Parrot
                          </a>
                        </td>
                        <td className='product-image-title'>
                          <a href='single-product.htmll' className='image'>
                            <img className='fit-image' src='assets/images/products/medium-product/3.png' alt='Compare Product' />
                          </a>
                          <a href='#/' className='category mb-1'>
                            Dog
                          </a>
                          <a href='single-product.html' className='title'>
                            Variable Belgian Sheepdog
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className='first-column'>Description</td>
                        <td className='pro-desc'>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nulla, explicabo iste a rerum pariatur.</p>
                        </td>
                        <td className='pro-desc'>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit commodi obcaecati cumque consectetur alias incidunt?</p>
                        </td>
                        <td className='pro-desc'>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,facere. Fuga asperiores inventore iste tempora.</p>
                        </td>
                      </tr>
                      <tr>
                        <td className='first-column'>Price</td>
                        <td className='pro-price'>$95</td>
                        <td className='pro-price'>$75</td>
                        <td className='pro-price'>$60</td>
                      </tr>
                      <tr>
                        <td className='first-column'>Size</td>
                        <td className='pro-color'>Medium</td>
                        <td className='pro-color'>Small</td>
                        <td className='pro-color'>Large</td>
                      </tr>
                      <tr>
                        <td className='first-column'>Stock</td>
                        <td className='pro-stock'>In Stock</td>
                        <td className='pro-stock'>Stock Out</td>
                        <td className='pro-stock'>In Stock</td>
                      </tr>
                      <tr>
                        <td className='first-column'>Add to cart</td>
                        <td>
                          <a href='cart.html' className='btn btn-dark btn-hover-primary rounded-0'>
                            Add to Cart
                          </a>
                        </td>
                        <td>
                          <a href='cart.html' className='btn btn-dark btn-hover-primary rounded-0 disabled'>
                            Add to Cart
                          </a>
                        </td>
                        <td>
                          <a href='cart.html' className='btn btn-dark btn-hover-primary rounded-0'>
                            Add to Cart
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className='first-column'>Rating</td>
                        <td className='product-rating'>
                          <span className='rating'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star-half-o'></i>
                            <i className='fa fa-star-o'></i>
                          </span>
                        </td>
                        <td className='product-rating'>
                          <span className='rating'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star-half-o'></i>
                            <i className='fa fa-star-o'></i>
                          </span>
                        </td>
                        <td className='product-rating'>
                          <span className='rating'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star-half-o'></i>
                            <i className='fa fa-star-o'></i>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className='first-column'>Remove</td>
                        <td className='pro-remove'>
                          <button>
                            <i className='ti-trash'></i>
                          </button>
                        </td>
                        <td className='pro-remove'>
                          <button>
                            <i className='ti-trash'></i>
                          </button>
                        </td>
                        <td className='pro-remove'>
                          <button>
                            <i className='ti-trash'></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

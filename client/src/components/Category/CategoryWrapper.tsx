import React, { ReactElement } from 'react';
import ProductModel from '../../models/ProductModel';
import CategoryItem from './CategoryItem';

interface Props {
  products: ProductModel[]
  isClothes: boolean;
}

export default function CategoryWrapper({ products, isClothes }: Props): ReactElement {
    if (products.length === 0)
        return (
            <div className='col-lg-9 col-12'>
                <p style={{ fontSize: 30, textAlign: 'center' }}>Không có sản phẩm</p>
            </div>
        );

    return (
        <div className='col-lg-9 col-12'>
            <div className='shop_toolbar_wrapper flex-column flex-md-row p-2 mb-8 border'>
                <div className='shop-top-bar-left'>
                    <div className='shop_toolbar_btn'>
                        <button
                            data-role='grid_3'
                            type='button'
                            className='active btn-grid-3'
                            title='Grid'
                        >
                            <i className='ti-layout-grid4-alt'></i>
                        </button>
                        <button
                            data-role='grid_list'
                            type='button'
                            className='btn-list'
                            title='List'
                        >
                            <i className='ti-align-justify'></i>
                        </button>
                    </div>
                    <div className='shop-top-show'>
                        <span>Showing 1–12 of 39 results</span>
                    </div>
                </div>

                <div className='shop-top-bar-right'>
                    <h4 className='title me-2'>Short By: </h4>

                    <div className='shop-short-by'>
                        <select className='nice-select' aria-label='.form-select-sm example'>
                            <option selected>Short by Default</option>
                            <option value='1'>Short by Popularity</option>
                            <option value='2'>Short by Rated</option>
                            <option value='3'>Short by Latest</option>
                            <option value='3'>Short by Price</option>
                            <option value='3'>Short by Price</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='row shop_wrapper grid_3'>
                {products.map((product) => (
                    <CategoryItem product={product} isClothes={isClothes}/>
                ))}
            </div>

            <div className='shop_toolbar_wrapper justify-content-center mt-10'>
                <div className='shop-top-bar-right'>
                    <nav>
                        <ul className='pagination'>
                            <li className='page-item'>
                                <a className='page-link active' href='#/'>
                                    1
                                </a>
                            </li>
                            <li className='page-item'>
                                <a className='page-link' href='#/'>
                                    2
                                </a>
                            </li>
                            <li className='page-item'>
                                <a className='page-link' href='#/'>
                                    3
                                </a>
                            </li>
                            <li className='page-item'>
                                <a className='page-link rounded-0' href='#/' aria-label='Next'>
                                    <span aria-hidden='true'>&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

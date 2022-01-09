import React, { ReactElement, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { sortProduct } from '../../app/reducers/product.reducer';
import ProductModel from '../../models/ProductModel';
import { Proxy } from '../../models/Proxy';
import { SortByNameAZ, SortByNameZA, SortByPriceHighToLow, SortByPriceLowToHigh, SortedList } from '../../models/Sort';
import CategoryItem from './CategoryItem';

interface Props {
    products: ProductModel[];
    isClothes: boolean;
}

export default function CategoryWrapper({ products, isClothes }: Props): ReactElement {
    const dispatch = useAppDispatch();
    const [limit, setLimit] = useState(6);
    const totalProduct = products.length;

    const productProxy = new Proxy<ProductModel>(products, limit);

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
                        <span>
                            Showing {products.length < 9 ? productProxy.getProducts().length : 9} of{' '}
                            {products.length} results
                        </span>
                    </div>
                </div>

                <div className='shop-top-bar-right'>
                    <h4 className='title me-2'>Short By: </h4>

                    <div className='shop-short-by'>
                        <select
                            className='nice-select'
                            aria-label='.form-select-sm example'
                            onChange={(e) => dispatch(sortProduct(e.target.value as any))}
                        >
                            <option selected value='A-Z'>
                                Short by Name (A-Z)
                            </option>
                            <option value='Z-A'>Short by Name (Z-A)</option>
                            <option value='H-L'>Short by Price (High to Low)</option>
                            <option value='L-H'>Short by Price (Low to High)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='row shop_wrapper grid_3'>
                {productProxy.getProducts().map((product) => (
                    <CategoryItem product={product} isClothes={isClothes} />
                ))}
            </div>

            {limit < totalProduct && (
                <div className='shop_toolbar_wrapper justify-content-center mt-10'>
                    <div className='shop-top-bar-right'>
                        <button
                            className='btn btn btn-gray-deep btn-hover-primary mt-6'
                            onClick={() => setLimit(limit + 6)}
                        >
                            Load more
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

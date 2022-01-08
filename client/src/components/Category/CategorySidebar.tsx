import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionHeader, AccordionItem } from 'reactstrap';
import CategoryAction from '../../app/actions/category.action';
import { useAppSelector } from '../../app/hooks';
import VND from '../../configs/VND';
import CategoryModel from '../../models/CategoryModel';
import ProductModel from '../../models/ProductModel';
import getDiscountPrice from '../../utils/getDiscountPrice';

interface Props {
    recentProducts: ProductModel[];
    onSearch: (e: any) => void;
}

export default function CategorySidebar({ recentProducts, onSearch }: Props): ReactElement {
    const [categories, setCategories] = useState<CategoryModel[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        CategoryAction.getInstance()
            .getCategories()
            .then((res) => setCategories(res));
    }, []);

    return (
        <div className='col-lg-3 col-12'>
            <aside className='sidebar_widget mt-10 mt-lg-0'>
                <div className='widget_inner'>
                    <div className='widget-list mb-10'>
                        <h3 className='widget-title mb-6'>Search</h3>
                        <div className='search-box'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Search Our Store'
                                aria-label='Search Our Store'
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                            <button className='search-icon' type='button' onClick={() => onSearch(search)}>
                                <i className='icon-magnifier'></i>
                            </button>
                        </div>
                    </div>
                    <div className='widget-list mb-10'>
                        <h3 className='widget-title mb-6'>Categories</h3>
                        <div className='sidebar-body'>
                            <ul className='sidebar-list'>
                                {categories.map((category) =>
                                    category.childCate.map((child) => (
                                        <li key={child._id} style={{ textTransform: 'capitalize' }}>
                                            <Link
                                                to={`/category/detail/${child._id}`}
                                                state={{ clothes: category.name === 'clothes' }}
                                            >
                                                {child.name}
                                            </Link>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* <div className='widget-list mb-10'>
                        <h3 className='widget-title mb-6'>Color</h3>
                        <div className='sidebar-body'>
                            <ul className='checkbox-container categories-list'>
                                <li>
                                    <div className='custom-control custom-checkbox'>
                                        <input
                                            type='checkbox'
                                            className='custom-control-input'
                                            id='customCheck12'
                                        />
                                        <label
                                            className='custom-control-label'
                                            htmlFor='customCheck12'
                                        >
                                            black (20)
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className='custom-control custom-checkbox'>
                                        <input
                                            type='checkbox'
                                            className='custom-control-input'
                                            id='customCheck13'
                                        />
                                        <label
                                            className='custom-control-label'
                                            htmlFor='customCheck13'
                                        >
                                            red (6)
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className='custom-control custom-checkbox'>
                                        <input
                                            type='checkbox'
                                            className='custom-control-input'
                                            id='customCheck14'
                                        />
                                        <label
                                            className='custom-control-label'
                                            htmlFor='customCheck14'
                                        >
                                            blue (8)
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className='custom-control custom-checkbox'>
                                        <input
                                            type='checkbox'
                                            className='custom-control-input'
                                            id='customCheck11'
                                        />
                                        <label
                                            className='custom-control-label'
                                            htmlFor='customCheck11'
                                        >
                                            green (5)
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className='custom-control custom-checkbox'>
                                        <input
                                            type='checkbox'
                                            className='custom-control-input'
                                            id='customCheck15'
                                        />
                                        <label
                                            className='custom-control-label'
                                            htmlFor='customCheck15'
                                        >
                                            pink (4)
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    <div className='widget-list'>
                        <h3 className='widget-title mb-6'>Recent Products</h3>
                        <div className='sidebar-body product-list-wrapper mb-n6'>
                            {recentProducts.map((item) => {
                                const discountPrice = getDiscountPrice(
                                    item.price,
                                    item.discount_value
                                );

                                return (
                                    <div className='single-product-list mb-6' key={item._id}>
                                        <div className='product'>
                                            <div className='thumb'>
                                                <Link to={`/product/${item._id}`} className='image'>
                                                    <img
                                                        className='fit-image first-image'
                                                        src={item.images[0]}
                                                        alt='Product Image'
                                                    />
                                                </Link>
                                            </div>
                                        </div>

                                        <div className='product-list-content'>
                                            <h6 className='product-name'>
                                                <Link to={`/product/${item._id}`}>{item.name}</Link>
                                            </h6>
                                            <span className='price'>
                                                <span className='new'>
                                                    {VND(
                                                        discountPrice ? discountPrice : item.price
                                                    )}
                                                </span>
                                                {discountPrice && (
                                                    <span className='old'>{VND(item.price)}</span>
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}

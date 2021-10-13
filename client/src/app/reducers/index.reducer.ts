import productReducer from './product.reducer';
import cartReducer from './cart.reducer';
import categoryReducer from './category.reducer'
import orderReducer from './order.reducer'

const rootReducer = {
    product: productReducer,
    cart: cartReducer,
    category: categoryReducer,
    order: orderReducer
};

export default rootReducer;

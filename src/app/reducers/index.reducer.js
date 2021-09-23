import productReducer from './product.reducer';
import cartReducer from './cart.reducer';

const rootReducer = {
    product: productReducer,
    cart: cartReducer,
};

export default rootReducer;

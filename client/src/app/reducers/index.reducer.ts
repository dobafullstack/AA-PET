import productReducer from './product.reducer';
import cartReducer from './cart.reducer';
import categoryReducer from './category.reducer'

const rootReducer = {
    product: productReducer,
    cart: cartReducer,
    category: categoryReducer,
};

export default rootReducer;

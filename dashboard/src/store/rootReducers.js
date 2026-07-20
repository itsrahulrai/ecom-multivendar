import authReducer from "./Reducers/authReducer";
import categoryReducer from "./Reducers/categoryReducer";
import brandReducer from "./Reducers/brandReducer";

const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  brand: brandReducer,
};

export default rootReducer;
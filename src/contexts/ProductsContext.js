import React, { createContext, useState, useReducer } from 'react';
import { allProducts } from '../services/db';
import {ProductsReducer} from './ProductsReducer';
export const ProductsContext = createContext();


const initialState = { appliedFilters: [], products: allProducts};

const ProductsContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    const [products] = useState(allProducts);
   
     const searchProduct = payload => {
        console.log(state);
        dispatch({type: 'SEARCH_ITEM', payload})
    }

   const contextValues = {
      searchProduct,
      filteredProducts: products,
      ...state 
   }


    return ( 
        <ProductsContext.Provider value={contextValues} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;
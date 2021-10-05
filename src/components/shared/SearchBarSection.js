import React from 'react';
import searchbarstyles from './SearchBarSection.module.scss';
import { useProducts } from '../../hooks/useProducts';

const SearchBarSection = () => {

    const { searchProduct } = useProducts();

    return ( 
        <div classame={searchbarstyles.searchBarSection}>
         <div classame={searchbarstyles.searchBar}>
          <input className={`${searchbarstyles.input}  form-control`}  id="" placeholder="Search product" onChange = {(e) => {searchProduct(e.target.value)}}/>
         </div>
          
        </div>
     );
}
 
export default SearchBarSection;
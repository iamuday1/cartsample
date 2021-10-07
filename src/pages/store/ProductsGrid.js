import React from 'react';

import ProductItem from './ProductItem';
import styles from './ProductsGrid.module.scss';
import { useProducts } from '../../hooks/useProducts';
import SearchBarSection from '../../components/shared/SearchBarSection';

const ProductsGrid = () => {

    const { filteredProducts } = useProducts()

    return ( 
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        Total Products: {filteredProducts.length} 
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <SearchBarSection />
                    </div>
                </div>
            </div>
            <div className={styles.p__grid}>

                {
                    filteredProducts.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    ))
                }

            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}
 
export default ProductsGrid;
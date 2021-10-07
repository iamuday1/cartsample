import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Online Store" description="This is the Online Store page" >
            <div >
                <div className="text-center mt-5">
                    <h1>Online Store</h1>
                    <p>Online Store Page.</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import {CartIcon} from '../icons';
import styles from './header.module.scss';

const Header = () => {

    const {itemCount} = useContext(CartContext);

    return ( 
        <header className={styles.header}>
            <Link to='/'>Online Store</Link>
            <Link to='/cart' style={{float:'right'}}> <CartIcon/> Cart ({itemCount})</Link>
            <span style={{float:'right'}}>Welcome User</span>
        </header>
     );
}
 
export default Header;
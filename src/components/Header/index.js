import React from 'react';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/img/logo.svg';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Header() {

    const cartSize = useSelector(state => state.cart.length);

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Rocketshoes" />
            </Link>

            <Cart to="/cart">

                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>

                <MdShoppingBasket size={36} color="#fff"></MdShoppingBasket>

            </Cart>
        </Container>
    );
}
import React from 'react';

import { EmptyComponent } from './styles';
import { Link } from 'react-router-dom';

import { MdRemoveShoppingCart } from 'react-icons/md';

export default function EmptyCart() {
    return (
        <EmptyComponent>
            <h2><MdRemoveShoppingCart /> Carrinho vazio</h2>
            <div>
                <Link to="/"><button>Vamos as compras</button></Link>
            </div>
        </EmptyComponent>
    );
}

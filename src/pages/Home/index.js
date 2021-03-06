import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { ProductList, LoaderContainer } from './styles';

import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';

import { formatPrice } from '../../util/format';

import MyLoader from '../../components/Loader/';

import * as CartActions from "../../store/modules/cart/actions";

export default function Home() {

    const amount = useSelector(state => state.cart.reduce((sumAmount, product) => {
        sumAmount[product.id] = product.amount;
        return sumAmount;

    }, {})
    );

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadProducts() {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }))

            setProducts(data);
            setLoading(false);
        }

        loadProducts();

    }, []);


    function handleAddProduct(id) {

        dispatch(CartActions.addToCartRequest(id));
    }


    if (loading) {
        return (
            <>
                <LoaderContainer>
                    <MyLoader />
                </LoaderContainer>
            </>
        );
    }

    return (
        <ProductList>

            {
                products.map(product => (

                    <li key={product.id}>
                        <img src={product.image}
                            alt={product.title} />
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>

                        <button type="button" onClick={() => handleAddProduct(product.id)}>

                            <div>
                                <MdAddShoppingCart size={16} color="#fff" /> {' '}
                                {amount[product.id] || 0}
                            </div>

                            <span>ADICIONAR AO CARRINHO</span>

                        </button>
                    </li>

                ))
            }

        </ProductList >
    );

}

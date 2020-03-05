import React from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import * as CartAction from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { formatPrice } from '../../util/format';
import EmptyCart from './EmptyCart';

function Cart({ cart, removeFromCart, total, updateAmount }) {

    function increment(product) {

        updateAmount(product.id, product.amount + 1);

    }

    function decrement(product) {

        updateAmount(product.id, product.amount - 1);

    }

    return (
        <Container>

            {(cart.length === 0) ? <EmptyCart /> :
                <>
                    <ProductTable>

                        <thead>
                            <th></th>
                            <th>PRODUTO</th>
                            <th>QTD</th>
                            <th>SUBTOTAL</th>
                            <th></th>
                        </thead>

                        <tbody>
                            {cart.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        <img src={product.image}
                                            alt={product.title} />
                                    </td>
                                    <td>
                                        <strong>{product.title}</strong>
                                        <span>{product.priceFormated}</span>
                                    </td>

                                    <td>
                                        <div>
                                            <button type="button" onClick={() => decrement(product)}>
                                                <MdRemoveCircleOutline size={20} color="#7159c1"></MdRemoveCircleOutline>
                                            </button>

                                            <input type="number" readOnly value={product.amount} />

                                            <button type="button" onClick={() => increment(product)}>
                                                <MdAddCircleOutline size={20} color="#7159c1"></MdAddCircleOutline>
                                            </button>
                                        </div>
                                    </td>

                                    <td>
                                        <strong>{product.subTotal}</strong>
                                    </td>

                                    <td>
                                        <button type="button"
                                            onClick={() =>
                                                removeFromCart(product.id)
                                            }
                                        >
                                            <MdDelete size={20} color="#7159c1"></MdDelete>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>



                    </ProductTable>



                    <footer>
                        <button type="button">
                            Finalizar pedido
                </button>

                        <Total>
                            <span>TOTAL</span>
                            <strong>{total}</strong>
                        </Total>
                    </footer>

                </>
            }
        </Container >
    );
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartAction, dispatch);

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subTotal: formatPrice(product.price * product.amount)
    })),
    total: formatPrice(state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
    }, 0))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

import React from "react"
import shopping_cart from '../Img/shopping_cart.png'
import { Link } from "react-router-dom"
import { CartContext } from "../context/cartContext"

function CartWidget() {
    return(
        <Link to={'/cart'}>
            <ul>
                <li class="submenu">
                    <button id="open" href="#" class='btn btn-success pull-right'><img src={shopping_cart} id="carrito" alt=""/><i class="fa-solid fa-cart-shopping"></i><span id="counter" class="cartcontents"></span></button>
                    <div id="modal_container" class="modal-container">
                        <div id="modalCart" class="modal-cart">
                            <h3 id="cartTitle">Tu carrito</h3>
                            <div id="cart-container">
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </Link>
    )
}

export default CartWidget
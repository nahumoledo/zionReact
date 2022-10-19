import React from "react"
import shopping_cart from './shopping_cart.png'
import { Link } from "react-router-dom"
import Cart from "./cart/cart"

function CartWidget() {
    return(
            <ul> 
                <li class="submenu">
                <Link to={'/cart'}><button id="open" href="#" class='btn btn-success pull-right'><img src={shopping_cart} id="carrito" alt=""/><i class="fa-solid fa-cart-shopping"></i><span id="counter" class="cartcontents"></span></button></Link>
                    <div id="modal_container" class="modal-container">
                        <div id="modalCart" class="modal-cart">
                            <div id="cart-container">
                                <Cart/>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
    )
}

export default CartWidget
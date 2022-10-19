import React from "react"
import shopping_cart from './shopping_cart.png'
import { Link } from "react-router-dom"
import Cart from "./cart/cart"

function CartWidget() {
    return(
            <ul> 
                <li className="submenu">
                <Link to={'/cart'}><button id="open" href="#" className='btn btn-success pull-right'><img src={shopping_cart} id="carrito" alt=""/><i class="fa-solid fa-cart-shopping"></i><span id="counter" class="cartcontents"></span></button></Link>
                    <div id="modal_container" className="modal-container">
                        <div id="modalCart" className="modal-cart">
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
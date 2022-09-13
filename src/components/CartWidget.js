import React from "react"
import shopping_cart from '../Img/shopping_cart.png'

function CartWidget() {
    return(
        <ul>
            <li class="submenu">
                <button id="open" href="#" class='btn btn-success pull-right'><img src={shopping_cart} id="carrito" alt=""/><i class="fa-solid fa-cart-shopping"></i><span id="counter" class="cartcontents"></span></button>
                <div id="modal_container" class="modal-container">
                    <div id="modalCart" class="modal-cart">
                        <h3 id="cartTitle">Tu carrito</h3>
                        <div id="cart-container"></div>
                    </div>
                </div>
            </li>
            </ul>
    )
}

export default CartWidget
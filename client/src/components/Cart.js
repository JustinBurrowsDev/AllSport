// Coded by Norbert M. Soto (https://github.com/nsoto92)

import React from "react"
import { useItems } from "../hooks"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/products.css"

import { FaTimes } from "react-icons/fa"

export default function(e) {
  const { cart, status, toggle, total, del, add, del1 } = useItems()

  return (
    <div className={status ? "cartItems" : "cartItems closed"}>
      <div className="cartAS">
        <div className="cartHead">
          <FaTimes
            onClick={toggle}
            className={
              status
                ? "nav-item  rounded-circle mx-2 basket-icon"
                : "nav-item  rounded-circle mx-2 basket-icon closed"
            }
          />
          <h1>Cart</h1>
          <p className="cartTitle">
            - You have {cart.length} item(s) in your cart
          </p>
        </div>
        <div className="buyItems">
          {cart.map(product => (
            <div className="listedProd" key={product.id}>
              <img className="prodImgCart" src={product.image} />
              <div className="prodDetails">
                {product.title}
                <br />
                {product.price}
                <br />
                <button onClick={e => del1(product.productId)}>&lsaquo;</button>
                {product.quantity}{" "}
                <button onClick={e => add(product)}>&rsaquo;</button>
                <br />
                <button onClick={e => del(product)} className="prodCart">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3> Total: ${total}</h3>
        <Link to="/checkout">
          <p className="receiptLink">CHECKOUT</p>
        </Link>
      </div>
    </div>
  )
}

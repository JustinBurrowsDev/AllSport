import React from "react"
import { useItems } from "../hooks"
import { useProducts } from "../hooks"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { TiShoppingCart } from "react-icons/ti"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/home.css"
import "../styles/products.css"

export default (props) => {
  const { products } = useProducts()
  const { toggle, status, cart } = useItems()
  return (
    <div className="container-fluid p-0">
      <Navbar
        className="navbar"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
      ></Navbar>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/products">SHOP</Nav.Link>
          <Nav.Link href="/players">LEARN A PRO</Nav.Link>
          <Nav.Link href="/aboutUs">ABOUT US</Nav.Link>
          <Nav.Link href="/contactUs">CONTACT US</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <div className="navbar-nav">
        <li className="nav-item  rounded-circle mx-2 basket-icon">
          <TiShoppingCart
            id='className={status ? "cartItems" : "cartItems closed"}'
            onClick={toggle}
            className={
              status
                ? "nav-item  rounded-circle mx-2 basket-icon closed"
                : "nav-item  rounded-circle mx-2 basket-icon"
            }
          />
        </li>
      </div>
    </div>
  )
}

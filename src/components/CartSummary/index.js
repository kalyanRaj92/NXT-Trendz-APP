// import {Link} from 'react-router-dom'
// import CartContext from '../../context/CartContext'

// import './index.css'

// const CartSummary = () => (
//   <CartContext.Consumer>
//     {value => {
//       const {cartList} = value
//       let total = 0
//       cartList.forEach(eachCartItem => {
//         total += eachCartItem.price * eachCartItem.quantity
//       })

//       return (
//         <>
//           <div className="cart-summary-container">
//             <h1 className="order-total-value">
//               <span className="order-total-label">Order Total:</span> Rs {total}
//               /-
//             </h1>
//             <p className="total-items">{cartList.length} Items in cart</p>
//             <Link to="/payment">
//               <button type="button" className="checkout-button d-sm-none">
//                 Checkout
//               </button>
//             </Link>
//           </div>
//           <Link to="/payment">
//             <button type="button" className="checkout-button d-lg-none">
//               Checkout
//             </button>
//           </Link>
//         </>
//       )
//     }}
//   </CartContext.Consumer>
// )

// export default CartSummary

import Popup from 'reactjs-popup'

import Payment from '../Payment'

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const items = cartList.length
      const totalPrice = cartList.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0,
      )
      return (
        <div className="cart-summary-container">
          <div className="cart-summary-card">
            <h1 className="cart-items-total-price">
              Order Total: <span>RS {totalPrice}/-</span>
            </h1>
            <p className="cart-items-count">{items} Items in cart</p>

            <Popup
              modal
              trigger={
                <button className="checkout-btn" type="button">
                  Checkout
                </button>
              }
              position="top left"
            >
              {close => <Payment close={close} />}
            </Popup>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
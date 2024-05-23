import { Link, useOutletContext } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiTrashCanOutline, mdiArrowLeftThin, mdiCartOutline } from '@mdi/js';


export default function Cart() {
  const [cart, setCart] = useOutletContext();

  function handleDelete(title) {
    setCart(cart.filter(item => item.title !== title));
  }

  function handleChange(e, title) {
    e.preventDefault();
    if (e.target.value === 0) {
      handleDelete(title);
    } else {
      const updatedCart = cart.map(item => {
        if (item.title === title) {
          return {
            ...item,
            quantity: e.target.value
          }
        } else return item;
      });
      setCart(updatedCart);
    }
  }

  function calculateSubTotal() {
    let result = 0;
    cart.map(item => {
      result += item.quantity * item.price;
    });

    return result;
  }

  function calculateTotal() {
    const subTotal = calculateSubTotal();
    return subTotal > 0 ? subTotal + 25 : 0;
  }

  const subTotal = calculateSubTotal();
  const total = calculateTotal();

  return (
    <div className="container">
      <h1 className="cart-title">Your Cart</h1>
      <div className="grid-container">
        <div className="cart-items">
          { cart.length === 0
            ? <p className="empty-cart">Your cart is empty</p>
            : <>
                {cart.map(item => {
                  return (
                  <div className="item" key={item.title}>
                    <div className="description">
                      <img className="thumbnail" src={item.image} width={100} />
                      <span className="item-title">{item.title}</span>
                      <button className="delete-btn" onClick={() => handleDelete(item.title)}>
                        <Icon path={mdiTrashCanOutline} size={0.8} />
                      </button>
                    </div>
                    <div className="checkout-item">
                      <div>
                        <h5>Price</h5>
                        <p className="cart-price"><span className="dollar">$</span>{item.price}</p>
                      </div>
                      <div>
                        <h5>Quantity</h5>
                        <form>
                          <input type="number" className="item-quantity" name="quantity" defaultValue={item.quantity} min={0} onChange={(e) => handleChange(e, item.title)}/>
                        </form>
                      </div>
                      <div>
                        <h5>Total</h5>
                        <p className="cart-price"><span className="dollar">$</span>{item.quantity * item.price}</p>
                      </div>
                    </div>
                  </div>
                  )
                })}
                <div className="checkout">
                  <Link className="shop-link" to="/shop"><Icon className="icon" path={mdiArrowLeftThin} size={1} /> Continue shopping</Link>
                  <Link className="checkout-link" to="#">
                    <button className="checkout-btn"><Icon className="icon" path={mdiCartOutline} size={1} /> Checkout</button>
                  </Link>
                </div>
              </>
          }
        </div>
        <div className="cart-summary">
          <h3>Order Summary: </h3>
          <hr />
          <p>Sub Total: <span className="dollar">$</span><span>{subTotal}</span></p>
          <hr />
          <p>Shipping charge: <span className="dollar">$</span><span>{subTotal > 0 ? 25 : 0}</span></p>
          <hr />
          <p className="summary-total">Total: <span className="dollar">$</span><span>{total}</span></p>
          <hr />
        </div>
      </div> 
    </div>
  );
}
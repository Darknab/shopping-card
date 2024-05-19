import { Link, useOutletContext } from "react-router-dom";


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
    <>
      <h1>Your Cart</h1>
      <div className="cart-items">
        { cart.length === 0
          ? <p>Your cart is empty</p>
          : <>
              {cart.map(item => {
                return (
                <div className="item" key={item.title}>
                  <div>
                    <img src={item.image} width={40} />
                    <span>{item.title}</span>
                    <button onClick={() => handleDelete(item.title)}>Delete</button>
                  </div>
                  <div>
                    <div className="item-price">
                      <h5>Price</h5>
                      <p>{item.price}</p>
                    </div>
                    <div className="item-quantity">
                      <h5>Quantity</h5>
                      <form>
                        <input type="number" name="quantity" defaultValue={item.quantity} onChange={(e) => handleChange(e, item.title)}/>
                      </form>
                    </div>
                    <div className="item-total">
                      <h5>Total</h5>
                      <p>{item.quantity * item.price}</p>
                    </div>
                  </div>
                </div>
                )
              })}
              <div>
                <Link to="/shop">Continue shopping</Link>
                <Link to="#">
                  <button>Checkout</button>
                </Link>
              </div>
            </>
        }
      </div>
      <div className="cart-summary">
        <h3>Order Summary</h3>
        <p>Sub Total: <span>{subTotal}</span></p>
        <p>Shipping charge: <span>{subTotal > 0 ? 25 : 0}</span></p>
        <p>Total: <span>{total}</span></p>
      </div>
    </>
  );
}
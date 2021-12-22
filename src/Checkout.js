import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckOurProduct from "./CheckOurProduct";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__items">
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map(item => (
            <CheckOurProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
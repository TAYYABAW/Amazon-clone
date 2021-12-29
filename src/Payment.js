import { Link } from "@mui/material";
import React from "react";
import CheckOurProduct from "./CheckOutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        {/* Payment section- delivery address  */}

        <h1>
          Checkout (
          <Link to="/checkout">
            <span>{basket?.length} items</span>
          </Link>
          )
        </h1>
        <div className="payment__section1">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section- Review Items  */}
        <div className="payment__section2">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {/* Items in the basket */}
            {basket.map((item) => (
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
        {/* Payment section- Payment Method  */}
        <div className="payment__section3">
          <div className="div payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go here*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

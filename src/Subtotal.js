import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { CurrencyExchange } from "@mui/icons-material";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <p>
              {/* Part of the homework */}
              Subtotal ({/*{basket.length}*/} 0 items): <strong>{/*{` ${value}`}*/}0 </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={0/*getBasketTotal(basket) (Part of the homework) */}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

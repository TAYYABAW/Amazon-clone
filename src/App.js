import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51KBzc9KxCCuFl78OkuEtit1igNgNw1abkeNf6LEbp36aYa0NhrMu7vDE5024WBgVUTxp1I2gr9uSLAtUxzmmOSGw00dBwS6Cg0"
);

function App() {
  const [dispatch] = useStateValue();

  useEffect(() => {
    //will only run once the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("USER IS >>>>", authUser);
      if (authUser) {
        //the user just logged in/ the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  });
  // BEM convention
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          <Route path="/orders" element={[<Header />, <Orders />]} />
          <Route exact path="/checkout" element={[<Header />, <Checkout />]} />
          <Route exact path="/payment" element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

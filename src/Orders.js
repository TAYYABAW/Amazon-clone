import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users") // Accessing user collection on firebase
        .doc(user?.email) // Accessing the user currently logged in
        .collection("orders") // Accessing the orders of the logged in user
        .orderBy("created", "desc") // Arrange the orders by date created in descending order
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              // Reads all the orders and turn them into an array
              id: doc.id, // Gets the id of the doc
              data: doc.data(), // Gets the data of the document
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;

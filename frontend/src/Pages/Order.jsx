import React from "react";
import OrderLists from "../Components/OrderLists";
import { useSelector } from "react-redux";
import EmptyCard from "../Components/EmptyCard";


const Order = () => {

  // Get the order data from the Redux store
  const { allOrder } = useSelector((store) => store.order);

  // Check if there are any orders
  if (allOrder.length < 1) return <EmptyCard name={"order"} />;

  // Render the OrderLists component with the order data
  return <OrderLists orders={allOrder} />;
};

export default Order;

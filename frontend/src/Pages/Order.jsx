import React from "react";
import OrderLists from "../Components/OrderLists";
import { useSelector } from "react-redux";
import EmptyCard from "../Components/EmptyCard";


const Order = () => {
  const { allOrder } = useSelector((store) => store.order);

  if (allOrder.length < 1) return <EmptyCard name={"order"} />;
  return <OrderLists orders={allOrder} />;
};

export default Order;

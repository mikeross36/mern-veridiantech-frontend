import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsertOrdersAction } from "../actions/orderActions";
import OrderItem from "../components/OrderItem";

export default function UserOrders() {
  const ordersState = useSelector((state) => state.getUserOrders);
  const { userOrders } = ordersState;

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getUsertOrdersAction());
    },
    [dispatch]
  );

  return (
    <section className="orders section container">
      <h2 className="section__title">your orders</h2>
      <ul className="orders__list">
        {userOrders?.map((order) => {
          return <OrderItem key={order._id} order={order} />;
        })}
      </ul>
    </section>
  );
}

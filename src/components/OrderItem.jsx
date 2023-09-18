import PropTypes from "prop-types";

const apiUrl = import.meta.env.VITE_API_URL;

// function formateDate(date) {
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year:"numeric"
//   }).format(new Date(date))
// }

export default function OrderItem({ order }) {
  return (
    <li className="order__card">
      <div className="order__card-content">
        <h4>order items</h4>
        {order?.orderItems?.map((item) => {
          const { id, image, name, price, quantity } = item;
          return (
            <article key={id} className="order__item">
              <div>
                <img
                  src={`${apiUrl}/images/drones/${image}`}
                  alt="order item pic"
                />
              </div>
              <div className="order__item-data">
                <em>
                  <p className="order__item-name">{name}</p>
                </em>
                <p>price: {price.toFixed(2)}€</p>
                <p>quantity: {quantity}</p>
                <p>total: {(price * quantity).toFixed(2)}€</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="order__info">
        <p>Address</p>
        <div className="order__data">
          <span>Street: {order.shippingAddress.street}</span>
          <span>City: {order.shippingAddress.city}</span>
          <span>Postal Code: {order.shippingAddress.postalCode}</span>
        </div>
      </div>
      <div className="order__info">
        <p>Order Info</p>
        <div className="order__data">
          <span>Amount: {order.orderAmount.toFixed(2)}€</span>
          <span>Date: {order.createdAt.substring(0, 10)}</span>
          <span>Transaction: {order.transactionId}</span>
          <span>Order ID: {order._id}</span>
        </div>
      </div>
    </li>
  );
}

OrderItem.propTypes = {
  order: PropTypes.object,
};

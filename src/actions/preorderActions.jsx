export function addItemToPreorderAction(drone, quantity) {
  return function (dispatch) {
    const preorderItem = {
      name: drone.name,
      id: drone.id,
      image: drone.coverImage,
      quantity: Number(quantity),
      price: drone.price,
    };
    dispatch({ type: "ADD_ITEM_TO_PREORDER", payload: preorderItem });
  };
}

export function removeItemFromPreorderAction(drone) {
  return function (dispatch) {
    dispatch({ type: "REMOVE_ITEM_FROM_PREORDER", payload: drone });
  };
}

export function increaseQuantAction(drone) {
  return function (dispatch) {
    dispatch({ type: "INCREASE_QUANT", payload: drone });
  };
}

export function decreaseQuantAction(drone) {
  return function (dispatch) {
    dispatch({ type: "DECREASE_QUANT", payload: drone });
  };
}

export function clearPreorderAction() {
  return function (dispatch) {
    dispatch({ type: "CLEAR_PREORDER" });
  };
}

export function getPreorderTotalsAction() {
  return function (dispatch) {
    dispatch({ type: "GET_PREORDER_TOTALS" });
  };
}

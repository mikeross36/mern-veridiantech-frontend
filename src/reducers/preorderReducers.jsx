const initialState = {
  preorderItems: [],
  itemsTotal: 0,
  preorderTotal: 0,
};

function addItemToPreorder(state, action) {
  const preorderItemsCopy = [...state.preorderItems];
  const currItemIdx = preorderItemsCopy.findIndex(
    (item) => item.id === action.payload.id
  );
  if (currItemIdx < 0) {
    preorderItemsCopy.push({ ...action.payload });
  } else {
    const itemCopy = preorderItemsCopy[currItemIdx];
    itemCopy.quantity++;
    preorderItemsCopy[currItemIdx] = itemCopy;
  }
  return { ...state, preorderItems: preorderItemsCopy };
}

function removeItemFromPreorder(state, action) {
  let preorderItemsCopy = [...state.preorderItems];
  preorderItemsCopy = preorderItemsCopy.filter(
    (item) => item.id !== action.payload.id
  );
  return { ...state, preorderItems: preorderItemsCopy };
}

function increaseQuant(state, action) {
  let preorderItemsCopy = [...state.preorderItems];
  const incQuantItems = preorderItemsCopy.map((item) => {
    if (item.id === action.payload.id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  preorderItemsCopy = incQuantItems;
  return { ...state, preorderItems: preorderItemsCopy };
}

function decreaseQuant(state, action) {
  let preorderItemsCopy = [...state.preorderItems];
  const decQuantItems = preorderItemsCopy
    .map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
    .filter((item) => item.quantity !== 0);
  preorderItemsCopy = decQuantItems;
  return { ...state, preorderItems: preorderItemsCopy };
}

function getPreorderTotals(state) {
  let { itemsTotal, preorderTotal } = state.preorderItems.reduce(
    (acc, currItem) => {
      const currItemTotal = currItem.quantity * currItem.price;
      acc.preorderTotal += currItemTotal;
      acc.itemsTotal += currItem.quantity;
      return acc;
    },
    { itemsTotal: 0, preorderTotal: 0 }
  );
  preorderTotal = Number(preorderTotal);
  return { ...state, itemsTotal, preorderTotal };
}

function clearPreorder(state) {
  let preorderItemsCopy = [...state.preorderItems];
  const confirmed = window.confirm("Are you sure you want to clear preorder?");
  if (confirmed) preorderItemsCopy = [];
  return { ...state, preorderItems: preorderItemsCopy };
}

export function preorderReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM_TO_PREORDER":
      return addItemToPreorder(state, action);
    case "REMOVE_ITEM_FROM_PREORDER":
      return removeItemFromPreorder(state, action);
    case "INCREASE_QUANT":
      return increaseQuant(state, action);
    case "DECREASE_QUANT":
      return decreaseQuant(state, action);
    case "GET_PREORDER_TOTALS":
      return getPreorderTotals(state);
    case "CLEAR_PREORDER":
      return clearPreorder(state);
    default:
      return state;
  }
}

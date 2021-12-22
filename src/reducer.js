export const initialState = {
  basket: [],
  //user: null,
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
// (? is an optional change which prevents everything from breaking if basket is not found
// reduce is a function that itterates through the basket and tally ups the total
// "amount" is the initital amount
// amount will itterate for each item in basket
// "0" is the initial amount
// the above reduce function will itterate through the basket array for each item and
// will add the price of each item to amount

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} as it's not in basket!`
        );
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;

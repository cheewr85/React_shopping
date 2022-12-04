import React, { useCallback, useMemo, useReducer, useState } from "react";
import Header from "../src/components/Layout/Header";
import AvailableMeals from "../src/components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";

export const CartStateContext = React.createContext();
export const SetCartStateContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      let a = 0;
      state.map((it) => {
        if (it.id === action.data.id) {
          it.amount += action.data.amount;
          a = 1;
        }
      });
      if (a === 1) return state;
      console.log(action.data);
      return [...state, action.data];
    }
    case "ADD": {
      return state.map((it) => {
        return it.id === action.targetId
          ? { ...it, amount: (it.amount += 1) }
          : it;
      });
    }
    case "REMOVE": {
      return state.map((it) => {
        return it.id === action.targetId
          ? { ...it, amount: (it.amount -= 1) }
          : it;
      });
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

function App() {
  const [cartState, dispatch] = useReducer(reducer, []);
  // console.log(...cartState);
  const [cartTrigger, setCartTrigger] = useState(false);
  const cartData = { cartState, cartTrigger };

  const onCreate = useCallback((mealData) => {
    dispatch({ type: "CREATE", data: { ...mealData } });
  }, []);
  const onAdd = useCallback((targetId) => {
    dispatch({ type: "ADD", targetId });
  }, []);
  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);
  const onDelete = useCallback((targetId) => {
    dispatch({ type: "DELETE", targetId });
  }, []);
  const showCart = () => {
    return <Cart />;
  };

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onRemove, onAdd, onDelete, setCartTrigger };
  }, []);
  return (
    <CartStateContext.Provider value={cartData}>
      <SetCartStateContext.Provider value={memoizedDispatch}>
        <div>
          <Header />
          <AvailableMeals />
        </div>
        {cartTrigger === true ? <Cart /> : ""}
      </SetCartStateContext.Provider>
    </CartStateContext.Provider>
  );
}

export default App;

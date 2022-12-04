import { useState } from "react";

import Header from "../src/components/Layout/Header.js";
import Cart from "./components/Cart/Cart.js";
import AvaliableMeals from "./components/Meals/AvailableMeals.js";
import CartProvider from "./store/CartProvider.js";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <AvaliableMeals />
      </main>
    </CartProvider>
  );
}

export default App;

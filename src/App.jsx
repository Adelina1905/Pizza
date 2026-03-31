import { createRoot } from "react-dom/client";
import { StrictMode, useState } from "react";
// import { Pizza } from "./Pizza";
import PizzaOfTheDay from "./PizzaOdTheDay";
import Order from "./Order";
import Header from "./Header";
import { CartContext } from "./contexts";
const App = () => {
  const cartHook = useState([]);


  return (
    <StrictMode>
      <CartContext.Provider value = {cartHook}>
      <div>
        <Header />
        {/* <Pizza name="The Pepperoni Pizza" description="some dope pizza yo" image="/public/pizzas/pepperoni.webp" />
      <Pizza name="Americano Pizza" description="french fires and hotdogs" image="/public/pizzas/big_meat.webp" />
      <Pizza name="The Hawaiian" description="pineapple and ham" image="/public/pizzas/hawaiian.webp" />
      <Pizza name="Chicken Pizza" description="chicken nuggies on your pizza, wtf UK" image="/public/pizzas/cali_ckn.webp" />
      <Pizza name="Baked Potato Pizza" description="wholy potato mash, wtf Minesota" image="/public/pizzas/ckn_pesto.webp" /> */}
        <Order />
        <PizzaOfTheDay/>
      </div>  
      </CartContext.Provider>
    </StrictMode>

  )
};
// React.createElement("div", {}, [
//     React.createElement("h1", {}, "Padre Gino's"),
//     React.createElement(Pizza, {
//       name: "The Pepperoni Pizza",
//       description: "some dope pizza yo",
//     }),
//     React.createElement(Pizza, {
//       name: "Americano Pizza",
//       description: "french fires and hotdogs",
//     }),
//     React.createElement(Pizza, {
//       name: "The Hawaiian",
//       description: "pineapple and ham",
//     }),
//     React.createElement(Pizza, {
//       name: "Chicken Pizza",
//       description: "chicken nuggies on your pizza, wtf UK",
//     }),
//     React.createElement(Pizza, {
//       name: "Baked Potato Pizza",
//       description: "wholy potato mash, wtf Minesota",
//     }),
//   ]);
const container = document.getElementById("root");
const root = createRoot(container);
// const root = ReactDOM.createRoot(container);
root.render(<App />);
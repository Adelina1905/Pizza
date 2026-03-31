import { createRoot } from "react-dom/client";
import { Pizza } from "./Pizza";


const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza name="The Pepperoni Pizza" description="some dope pizza yo"/>
      <Pizza name="Americano Pizza" description="french fires and hotdogs"/>
      <Pizza name="The Hawaiian" description="pineapple and ham"/>
      <Pizza name="Chicken Pizza" description="chicken nuggies on your pizza, wtf UK"/>
      <Pizza name="Baked Potato Pizza" description="wholy potato mash, wtf Minesota"/>
    </div>
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
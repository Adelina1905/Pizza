import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "some dope pizza yo",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "french fires and hotdogs",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "pineapple and ham",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "chicken nuggies on your pizza, wtf UK",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      description: "wholy potato mash, wtf Minesota",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
// const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

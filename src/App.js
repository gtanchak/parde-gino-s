import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Parde Gino's"),
    React.createElement(Pizza, {
      name: "7 cheesy",
      description: "7 cube with Majarrela Cheese",
    }),
    React.createElement(Pizza, {
      name: "Farm House",
      description: "Vegetable toping Souces.",
    }),
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

import React from "react";
import ReactDOM from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Léia", animal: "Cat", breed: "Persa" }),
    React.createElement(Pet, {
      name: "Pantera",
      animal: "Dog",
      breed: "Vira-lata"
    }),
    React.createElement(Pet, {
      name: "Lobo",
      animal: "Dog",
      breed: "Pastor Alemão"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.color),
    React.createElement("h3", {}, props.gender),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "fID" }, "Adopt me"),
    React.createElement(Pet, { name: "jack", color: "white", gender: "male" }),
    React.createElement(Pet, {
      name: "siela",
      color: "brown",
      gender: "female",
    }),
    React.createElement(Pet, { name: "rock", color: "black", gender: "male" }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

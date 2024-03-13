const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement("h1", { id: "heading" }, "Hola mama coco"),
      React.createElement("h1", { id: "heading" }, "Hola mama coco2"),
    ]
  )
);

// const heading = React.createElement("h1", {id:"heading" , xyz:"abc"}, "hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

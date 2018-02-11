console.log("app is running");

//JSX Java
// var template=<p>this is JSX from app.js!</p>;
var template = React.createElement(
    "h1",
    { id: "someid" },
    "this is JSX from app.js!"
  );
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
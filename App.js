/** <div id='parent'>
 * <div id='child'>
 * <h1>I am H1 tag</h1>
 * <h2>I am H1 tag</h2>
 * </div>
 *
 * <div id='child2'>
 * <h1>I am H1 tag</h1>
 * <h2>I am H1 tag</h2>
 * </div>
 * </div>
 *
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
    React.createElement("div", { id: "div" }, "i am div tag"),
    React.createElement("span", { id: "span" }, "i am span tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
    React.createElement("div", { id: "div" }, "i am div tag"),
    React.createElement("span", { id: "span" }, "i am span tag"),
  ])
);
console.log("parent", parent);

const rootId = document.getElementById("root");
const root = ReactDOM.createRoot(rootId);
root.render(parent);

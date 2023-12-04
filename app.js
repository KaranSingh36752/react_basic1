

// const App = () => {
//     return React.createElement('h1', null, 'Hello, React via CDN!');
//   };
  
//   ReactDOM.render(React.createElement(App), document.getElementById('root'));

// const head = document.getElementById("root1")
// const newHead = document.createElement("h1")
// newHead.textContent = "whith js"
// head.appendChild(newHead)
  
const head = document.getElementById("root1"); // Correcting the ID reference
const newHead = document.createElement("h1");
newHead.innerHTML = "<h1>with JS</h1>"; // Fixed the text content

head.appendChild(newHead); // Appending the new <h1> element to the element with the ID "root1"

const heading = React.createElement(
    "h1", 
    {
        id : "title",
    
    },
    "Namaste Everyone");
const heading2 = React.createElement(
    "h2",
    {
id : "title",
    },
    "this is sencond");
const container = React.createElement("div",{
    className: "container",
}, [heading, heading2]);
console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
// This line imports the ReactDom object from the react-dom/client module
import ReactDom from "react-dom/client";

// This line imports BrowserRouter from react-router-dom which is used to wrap the App component
import { BrowserRouter } from "react-router-dom";

// This line imports the App component
import App from "./App";

// This line imports the index.css file
import "./index.css";

// This line renders the App component inside a BrowserRouter component
ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

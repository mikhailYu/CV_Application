import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import App from "./App";
import InfoPanel from "./components/infoPanel";
import EditMode from "./components/editMode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);

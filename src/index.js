import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import Card from "./Component/Card";
import data from "./Component/data";
import Navbar from "./Component/Navbar";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
   <Navbar />
  <App />

    {data.map((val) => {
      
      return <Card imgsrc={val.imgsrc} name={val.name} />;
    })}
    
  </StrictMode>,
  rootElement
);

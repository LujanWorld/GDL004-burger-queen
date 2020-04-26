import React, { useState } from "react";
import NameForm from "./NameForm";
import "./App.css";
import Main from "./Main";

function App() {
  const [name, setName] = useState("");
  let showName = name === "";
  return (
    <div className="App">
      <div className="topnav">
        <a className="active" href="#home">
          Burguer Queen
        </a>
      </div>

      {showName && <NameForm />}

      {!showName && <Main />}
      {/* <header className="App-header">
        <br></br>
        <br></br>
        <button className="button">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Breakfast
          </a>
        </button>
        <br></br>
        <br></br>
        <button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lunch and Dinner
          </a>
        </button> 
      </header> */}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Switch, Route, Link, Router, useHistory } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import NameForm from "./NameForm";
import KitchenForm from "./KitchenForm";
import Main from "./Main";
import items from "./items";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [Kitchen, setKitchen] = useState("");
  const [displayForm, setDisplayForm] = useState(true);
  // let showName = name === "";
  let showKitchen = Kitchen === "";

  return (
    <div className="App">
      <div className="topnav">
        <a className="active" href="#home">
          Burguer Queen
        </a>
      </div>

      {displayForm && (
        <NameForm
          onName={setName}
          name={name}
          setDisplayForm={setDisplayForm}
        />
      )}

      {!displayForm && <Main items={items} name={name} />}

      {showKitchen && <KitchenForm onKitchenorder={setKitchen} />}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NameForm from "./NameForm";
// import KitchenForm from "./KitchenForm";

import "./App.css";
import Main from "./Main";
import items from "./items";

function App() {
  const [name, setName] = useState("");
  const [Kitchen, setKitchen] = useState("");
  let showName = name === "";
  let showKitchen = Kitchen === "";
  return (
    <div className="App">
      <div className="topnav">
        <a className="active" href="#home">
          Burguer Queen
        </a>
      </div>

      {showName && <NameForm onName={setName} />}

      {!showName && <Main items={items} />}

      {/* {showKitchen && <KitchenForm onKitchenorder={setKitchen} />} */}
    </div>
  );
}

export default App;

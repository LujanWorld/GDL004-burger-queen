import React, { useState } from "react";

export default function NameForm(props) {
  const [name, setName] = useState("");

  const handleName = (event) => {
    event.preventDefault();

    if (name === "") {
      console.log("add a name");
      return;
    }
    props.onName(name);
  };

  return (
    <form className="name">
      <label>
        Nombre:
        <input type="text" name="name" onChange={setName} />
      </label>
      <input type="submit" value="Next" onClick={handleName} />
    </form>
  );
}

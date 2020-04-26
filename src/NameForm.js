import React, { useState } from "react";

export default function NameForm(props) {
  const [name, setName] = useState("");
  const handleName = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
    }
    setName(true);

    props.onName();
  };

  return (
    <form className="name">
      <label>
        Name:
        <input type="text" name="name" onSubmit={handleName} />
      </label>
      <input type="submit" value="Next" />
    </form>
  );
}

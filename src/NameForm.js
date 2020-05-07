import React, { useState } from "react";

export default function NameForm(props) {
  const handleName = (event) => {
    props.onName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setDisplayForm(false);
  };

  return (
    <form className="name" onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={props.name}
          onChange={handleName}
        />
      </label>
      <button type="submit" value="Next">
        Continuar
      </button>
    </form>
  );
}

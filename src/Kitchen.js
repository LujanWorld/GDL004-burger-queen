import React, { useState } from "react";

export default function KitchenForm(props) {
  const [kitchenOrder, setKitchenOrder] = useState("");

  const handleKitchenOrder = (event) => {
    event.preventDefault();

    if (kitchenOrder === "") {
      console.log("add a order");
      return;
    }
    props.onKitchenorder(name);
  };

  return (
    <form className="name">
      <label>
        El pedido esta listo?
        <input type="text" name="name" onChange={setKitchenOrder} />
      </label>
      <input type="submit" value="Next" onClick={handleKitchenOrder} />
    </form>
  );
}

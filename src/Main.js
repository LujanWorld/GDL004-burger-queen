import React, { useState } from "react";

export default function Main(props) {
  const [activeType, setActiveType] = useState("desayuno");
  console.log(props.items);
  let uniqueTypes = [];
  props.items.forEach((el) => {
    console.log(el.type);
    let pos = uniqueTypes.indexOf(el.type);
    if (pos === -1) {
      uniqueTypes.push(el.type);
    }
  });
  console.log(uniqueTypes);

  const curItems = props.items.filter((item) => item.type === "desayuno");
  // const cena = props.items.filter((cn) => cn.type === "cena");

  // console.log(curItems);
  return (
    <form className="name">
      {uniqueTypes.map((ty, index) => (
        <button key={index}>{ty}</button>
      ))}
      {/* {cena.map((item, index) => (
        <div key={index}>
          {item.name}--{item.price}
        </div>
      ))} */}

      {curItems.map((item, index) => (
        <div key={index}>
          {item.name}={item.price}
        </div>
      ))}
    </form>
  );
}

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Main(props) {
  const [activeType, setActiveType] = useState("desayuno");
  const [order, setOrder] = useState([]);
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

  const curItems = props.items.filter((item) => item.type === activeType);

  const addProductToOrder = (product) => {
    setOrder([...order, product]);
  };

  const removeProductFromOrder = (product) => {
    setOrder(order.filter((pro) => pro.id !== product.id));
  };
  console.log({ order });
  return (
    <form className="items">
      {uniqueTypes.map((ty, index) => (
        <Button
          className="itemButtons"
          variant="warning"
          onClick={(e) => {
            e.preventDefault();
            setActiveType(ty);
          }}
          key={index}
        >
          {ty}
        </Button>
      ))}

      {curItems.map((item, index) => (
        <ListGroup.Item
          className="foodList"
          body
          style={{ width: "15rem" }}
          key={index}
          onClick={() => addProductToOrder(item)}
        >
          {item.name}={item.price}
        </ListGroup.Item>
      ))}

      <Card className="orderCard" body style={{ width: "55rem" }}>
        <Card.Body>
          <Card.Title>Tu orden es: </Card.Title>
          {order.map((product) => (
            <ListGroup.Item
              className="foodList"
              body
              style={{ width: "25rem" }}
              key={product.id}
              onClick={() => removeProductFromOrder(product)}
            >
              {product.name}={product.price}
            </ListGroup.Item>
          ))}
          <Button variant="success">Enviar a cocina</Button>
        </Card.Body>
      </Card>
    </form>
  );
}

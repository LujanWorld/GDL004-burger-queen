import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//import KitchenForm from "./KitchenForm";

export default function Main(props) {
  const [activeType, setActiveType] = useState("desayuno");
  const [order, setOrder] = useState([]);

  let uniqueTypes = [];
  props.items.forEach((el) => {
    let pos = uniqueTypes.indexOf(el.type);
    if (pos === -1) {
      uniqueTypes.push(el.type);
    }
  });

  const curItems = props.items.filter((item) => item.type === activeType);
  // console.log(curItems);
  let sum = 0;
  order.forEach((item) => {
    sum += item.price;
  });
  console.log(sum);

  const addProductToOrder = (product) => {
    setOrder([...order, product]);
  };

  const removeProductFromOrder = (product) => {
    setOrder(order.filter((pro) => pro.id !== product.id));
  };

  const addOrder = () => {
    const products = [...order];
    const customerName = props.name;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const price = order.reduce(
      (totalPrice, currentProduct) => totalPrice + currentProduct.price,
      0
    );
    const payload = {
      products,
      customerName,
      price,
    };

    // console.log({
    //   products,
    //   customerName,
    //   price,
    // });
    // 0 + 5.0
    // console.log(order.reduce(price));
    // const payload  = {
    //   products: [],
    //   customerName: '',
    //   price: 0;
    // };
    // firebase
    //   .firestore()
    //   .collection("order")
    //   .add({
    //     product: order,
    //     price: price,
    //     customer: customer,
    //   })
    //   .then((data) => {
    //     /** Change the state */
    //   })
    //   .catch((err) => {});
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
          <p>El Total es: {sum}</p>
          <Button variant="success" onClick={addOrder}>
            Enviar a cocina
          </Button>
        </Card.Body>
      </Card>
    </form>
  );
}

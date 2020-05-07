import React, { useState, useEffect } from "react";

export default function KitchenForm(props) {
  const [kitchenOrder, setKitchenOrder] = useState("");
  // const [listFood, setListFood] = useState([]);
  // const [FoodDone, setFoodDone] = useState(true);
  // const [FoodTime, steFoodTime] = useState(0);

  const handleKitchenOrder = (event) => {
    event.preventDefault();

    if (kitchenOrder === "") {
      console.log("add a order");
      return;
    }
    props.onKitchenorder(kitchenOrder);
  };

  const changeStatusOrder = (orderId, status) => {
    // firebase.firestore().collection('order').doc(orderId).set({
    //   status:
    // })
  };

  // useEffect(() => {
  //   const subC = firebase
  //     .firestore()
  //     .collection("order")
  //     .onSnapshot((orders) => {
  //       let ordersArray = [];
  //       orders.foreach((order) =>
  //         orderArray.push({ ...order.data(), uid: order.uid })
  //       );

  //       setOrders(ordersArray);
  //     });

  //   return () => {
  //     subC.unsuscribe();
  //   };
  // }, []);

  return (
    <form className="name">
      <label>
        <input
          type="checkbox"
          checked={handleKitchenOrder}
          onChange={setKitchenOrder}
        />
        Pedido Listo!
        <input
          type="checkbox"
          checked={handleKitchenOrder}
          onChange={setKitchenOrder}
        />
        Preparando Pedido!
      </label>
      <p>El tiempo que tardo fue:</p>
    </form>
  );
}

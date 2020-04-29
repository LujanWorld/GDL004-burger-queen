export default [
  { name: "Café americano", price: 5.0, type: "desayuno", category: "" },
  { name: "Café con leche", price: 7.0, type: "desayuno", category: "" },
  {
    name: "Sandwich de jamón y queso",
    price: 10.0,
    type: "desayuno",
    category: "",
  },
  {
    name: "Jugo de frutas natural",
    price: 7.0,
    type: "desayuno",
    category: "",
  },
  {
    name: "Hamburguesa simple",
    price: 10.0,
    type: "cena",
    category: "Hamburguesas",
  },
  {
    name: "Hamburguesa doble",
    price: 15.0,
    type: "cena",
    category: "Hamburguesas",
  },
  {
    name: "Papas fritas",
    price: 5.0,
    type: "cena",
    category: "Acompañamientos",
  },
  {
    name: "Aros de cebolla",
    price: 5.0,
    type: "cena",
    category: "Acompañamientos",
  },
  {
    name: "Agua 500ml",
    price: 5.0,
    type: "cena",
    category: "Para tomar",
  },
  {
    name: "Agua 750ml",
    price: 7.0,
    type: "cena",
    category: "Para tomar",
  },
  {
    name: "Bebida/gaseosa 500ml",
    price: 7.0,
    type: "cena",
    category: "Para tomar",
  },
  {
    name: "Bebida/gaseosa 750ml	",
    price: 10.0,
    type: "cena",
    category: "Para tomar",
  },
];

// const filterByType = (arr, t) => {
//   return arr.filter((item) => item.type === t);
// };

// console.log(filterByType(items, "cena"));

// function filter(arr, cb) {
//   let res = [];

//   arr.forEach((el) => {
//     if (cb(el) == true) {
//       res.push(el);
//     }
//   });

//   return res;
// }
// console.log(
//   items.find((el) => {
//     return el.name === "Café americano";
//   })
// );

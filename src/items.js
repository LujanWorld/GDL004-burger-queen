export default [
  { name: "Café americano", price: 5.0, type: "desayuno", category: "", id: 1 },
  { name: "Café con leche", price: 7.0, type: "desayuno", category: "", id: 2 },
  {
    id: 3,
    name: "Sandwich de jamón y queso",
    price: 10.0,
    type: "desayuno",
    category: "",
  },
  {
    id: 4,
    name: "Jugo de frutas natural",
    price: 7.0,
    type: "desayuno",
    category: "",
  },
  {
    id: 5,
    name: "Hamburguesa simple",
    price: 10.0,
    type: "cena",
    category: "Hamburguesas",
  },
  {
    id: 6,
    name: "Hamburguesa doble",
    price: 15.0,
    type: "cena",
    category: "Hamburguesas",
  },
  {
    id: 7,
    name: "Papas fritas",
    price: 5.0,
    type: "cena",
    category: "Acompañamientos",
  },
  {
    id: 8,
    name: "Aros de cebolla",
    price: 5.0,
    type: "cena",
    category: "Acompañamientos",
  },
  {
    id: 9,
    name: "Agua 500ml",
    price: 5.0,
    type: "cena",
    category: "Para tomar",
  },
  {
    id: 10,
    name: "Agua 750ml",
    price: 7.0,
    type: "cena",
    category: "Para tomar",
  },
  {
    id: 11,
    name: "Bebida/gaseosa 500ml",
    price: 7.0,
    type: "cena",
    category: "Para tomar",
  },
  {
    id: 12,
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

import React, { useEffect, useState } from "react";

function App() {
  const fruitName = ["banana", "mango", "jackfruits", "cucumber"];
  const products = [
    {
      name: "Mobile",
      brand: "Symphony",
      price: 15000,
    },
    {
      name: "Laptop",
      brand: "Samsung",
      price: 20000,
    },
    {
      name: "Tablet",
      brand: "HP",
      price: 16000,
    },
  ];
  const person = {
    name: "Rafi",
    work: "student",
    age: 20,
  };
  let [info, setInfo] = useState([]);
  console.log(info.results);
 
  useEffect(() => {
    fetch("https://randomuser.me/api/?gender=female")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <div>
      <h1>Biography</h1>
      <h3> Name : {person.name}</h3>
      <h3>Work : {person.work}</h3>
      <h3>Age : {person.age}</h3>
      <Fruits name={fruitName[0]}></Fruits>
      <Fruits name={fruitName[1]}></Fruits>
      <Fruits name={fruitName[2]}></Fruits>
      <Count></Count>
      {products.map((product) => (
        <Devices
          name={product.name}
          brand={product.brand}
          price={product.price}
        ></Devices>
      ))}
      {/* api info */}
      {
        info.map(d => <ApiData datas={d}></ApiData>)
     }
    </div>
  );
}

export default App;

function Fruits(props) {
  const styleApply = {
    border: "1px solid green",
    backgroundColor: "blue",
    padding: "20px",
    color: "white",
    fontFamily: "sans-serif",
  };
  return (
    <div>
      <h3 style={styleApply}>Fruits Name : {props.name}</h3>
    </div>
  );
}

function Count() {
  let [count, setCount] = useState(0);
  let increase = () => setCount(count + 1);
  let decrease = () => setCount(count - 1);

  return (
    <div>
      <button
        onClick={increase}
        style={{
          padding: "10px 20px",
          fontSize: "20px",
          marginRight: "5",
        }}
      >
        Add
      </button>
      <button
        onClick={decrease}
        style={{
          padding: "10px 20px",
          fontSize: "20px",
        }}
      >
        remove
      </button>
      <h2>Increase : {count}</h2>
    </div>
  );
}

function Devices(props) {
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        fontFamily: "sans-serif",
        padding: "20px",
        margin: "5px",
      }}
    >
      <h2 style={{ color: "blue", fontWeight: "600" }}>Name : {props.name} </h2>
      <h4 style={{ color: "" }}>Brand : {props.brand} </h4>
      <h3 style={{ color: "green" }}>Price : {props.price} </h3>
    </div>
  );
}

function ApiData(props) {
  console.log(props);
  return (
    <div>
      <h2>Gender : </h2>
      <h2>Email : </h2>
      <h2>Phone : </h2>
      <h2>
        Picture: <img src="{}" alt="" />
      </h2>
    </div>
  );
}

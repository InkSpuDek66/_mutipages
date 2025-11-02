// import componpents
import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// import pages
import Layout from "./layout/Layout/Layout";
import Home from "./Page/Home/Home";
import Todo from "./Page/Todo/Todo";
import Calculator from "./Page/Calculator/Calculator";
import Component from "./Page/Component/Component";
import Tax from "./Page/Tax/Tax";
import Products from "./Page/Products/Products";
import Carts from "./Page/Carts/Carts";
import Login from "./Page/Login/Login";

// import data
import { fecthProducts } from "./data/Products";

// import styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";

// App --> Layout --> Navbar(button) --> Home||Todo

//HashRouter, BrowserRouter
//localhost:5173/#/<path>
function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState("");

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  const [tab, setTab] = useState("home");

  useEffect(() => {
    setProducts(fecthProducts());
  }, []);
  useEffect(() => {
    console.log(products);
  });

  if (token === "") {
    // no Login
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    // Login
    return (
      <div className="App-container">
        <BrowserRouter basename="/_mutipages">
          <Routes>
            <Route
              element={
                <Layout
                  tab={tab}
                  setTab={setTab}
                  products={products}
                  carts={carts}
                  setToken={setToken}
                  role={role}
                />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/component" element={<Component />} />
              <Route path="/tax" element={<Tax />} />
              <Route path="/products" element={
                  <Products
                    products={products}
                    carts={carts}
                    setCarts={setCarts} />}
              />
              <Route path="/carts" element={
                <Carts carts={carts} setCarts={setCarts} />}
              />              
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "mdb-ui-kit/css/mdb.min.css";
import { Carousel, Dropdown, Ripple, initMDB } from "mdb-ui-kit";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import axios from "axios";

const App = () => {
  useEffect(() => {
    // Initialize MDB components
    initMDB({ Carousel, Dropdown, Ripple });
    getData();
  }, []);

  const [allProducts, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://fakestoreapi.com/products";
  const getData = () => {
    axios.get(url).then((response) => {
      setLoading(false)
      setproducts(response.data);
    });
  };

  return (
    <>
      <Header />
      <section className="container-fluid py-4 ">
        <Banner />
        <Section1 />
        {loading ? <p className="text-white text-center">Loading...</p> : <Section2 products={allProducts} />}
      </section>
    </>
  );
};

export default App;

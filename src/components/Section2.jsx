import React from "react";

const Section2 = ({ products }) => {
  return (
    <section className="container p-0 bg-white rounded pb-2 my-2">
      <div className="d-flex justify-content-between px-3 align-items-center pt-3">
        <p className="fs-5 text-dark">Top selling items</p>
        <p>
          <a href="#?" style={{ color: "#f68b1e", fontSize: ".9rem" }}>
            SEE ALL <i className="ms-1 fas fa-angle-right"></i>
          </a>
        </p>
      </div>
      <div className="section1 container d-grid gap-2 bg-white">
        {products.map((product, index) => (
          <div key={index} className="section1-grid-item grid2 card">
            <img
              src={product.image}
              className="card-img-top m-auto"
              alt=""
              style={{ height: 120, width: 120 }}
            />
            <div className="card-body p-2 text-dark">
              <p className="card-text lh-sm h-50 mb-0 mt-2" >{product.title.slice(0,22)}...</p>
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;

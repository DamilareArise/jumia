import React from "react";

const Banner = () => {
  return (
    <div className="container banner-grid1 d-grid px-0">
      <div className="banner-grid1-item1 bg-white rounded d-none d-lg-block"></div>
      <div className="banner-grid1-item2 rounded">
        {/* Carousel wrapper */}
        <div
          id="carouselBasicExample"
          className="carousel slide carousel-fade h-100"
          data-mdb-ride="carousel"
          data-mdb-carousel-init
        >
          {/* <!-- Indicators --> */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>

          {/* <!-- Inner --> */}
          <div className="carousel-inner">
            {/* <!-- Single item --> */}
            <div className="carousel-item active">
              <img
                src="/images/Artboard-1.gif"
                className="d-block w-100"
                alt="Sunset Over the City"
              />
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item">
              <img
                src="/images/712_X_384_JPAY.png"
                className="d-block w-100"
                alt="Canyon at Nigh"
              />
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item">
              <img
                src="/images/712X384-copy.gif"
                className="d-block w-100"
                alt="Cliff Above a Stormy Sea"
              />
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item">
              <img
                src="/images/712x384_12-12-12.png"
                className="d-block w-100"
                alt="Cliff Above a Stormy Sea"
              />
            </div>
          </div>
          {/* <!-- Inner --> */}

          {/* <!-- Controls --> */}
          <button
            className="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <!-- Carousel wrapper --> */}
      </div>
      <div className="banner-grid1-item3 bg-white rounded d-none d-lg-block"></div>
      <div className="banner-grid1-item4 rounded d-none d-lg-block"></div>
    </div>
  );
};

export default Banner;

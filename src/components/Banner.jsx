import React from 'react'

const Banner = () => {
  return (
    <>
        <section className='container-fluid py-4'>
            <div className="container banner-grid1 d-grid px-0">
                <div className="banner-grid1-item1 bg-white rounded"></div>
                <div className="banner-grid1-item2 rounded">
                    {/* Carousel wrapper */}
                    <div id="carouselBasicExample" className="carousel slide carousel-fade h-100" data-mdb-ride="carousel" data-mdb-carousel-init>
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
                        <img src="/images/Artboard-1.gif" className="d-block w-100" alt="Sunset Over the City"/>
                        
                        </div>

                        {/* <!-- Single item --> */}
                        <div className="carousel-item">
                        <img src="/images/712_X_384_JPAY.png" className="d-block w-100" alt="Canyon at Nigh"/>
                        
                        </div>

                        {/* <!-- Single item --> */}
                        <div className="carousel-item">
                        <img src="/images/712X384-copy.gif" className="d-block w-100" alt="Cliff Above a Stormy Sea"/>
                        </div>

                        {/* <!-- Single item --> */}
                        <div className="carousel-item">
                        <img src="/images/712x384_12-12-12.png" className="d-block w-100" alt="Cliff Above a Stormy Sea"/>
                        </div>

                    </div>
                    {/* <!-- Inner --> */}

                    {/* <!-- Controls --> */}
                    <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                    {/* <!-- Carousel wrapper --> */}
                </div>
                <div className="banner-grid1-item3 bg-white rounded"></div>
                <div className="banner-grid1-item4 rounded"></div>
            </div>
            <section className='section1 container d-grid p-2 gap-2 rounded my-3 bg-white'>
                <div className="section1-grid-item card">
                    <img src="/images/Artboard_1 (1).png" className='card-img-top' alt="" />
                    <div className="card-body p-0 align-content-center text-dark text-center">
                        <p className="card-text">Clearance Sale</p>
                    </div>
                </div>
                <div className="section1-grid-item card">
                    <img src="/images/Untitled-1.gif" className='card-img-top' alt="" />
                    <div className="card-body p-0 align-content-center text-dark text-center">
                        <p className="card-text">Anniversary Offers</p>
                    </div>
                </div>
                <div className="section1-grid-item card">
                    <img src="/images/Artboard_1_copy_13.png" className='card-img-top' alt="" />
                    <div className="card-body p-0 align-content-center text-dark text-center">
                        <p className="card-text">Special Offers</p>
                    </div>
                </div>
                <div className="section1-grid-item card">
                    <img src="/images/Artboard_1_copy_2.png" className='card-img-top' alt="" />
                    <div className="card-body p-0 align-content-center text-dark text-center">
                        <p className="card-text">Phone & Tablets Deals</p>
                    </div>
                </div>
                <div className="section1-grid-item card">
                    <img src="/images/appliances.png" className='card-img-top' alt="" />
                    <div className="card-body p-0 align-content-center text-dark text-center">
                        <p className="card-text">Appliances Deals</p>
                    </div>
                </div>
                <div className="section1-grid-item card">
                    <img src="/images/Artboard_1_copy_6.png" className='card-img-top' alt="" />
                    <div className="card-body p-0 align-content-center text-dark text-center">
                        <p className="card-text">Men's Sneakers</p>
                    </div>
                </div>
                <div className="section1-grid-item card">
                    <img src="/images/electronics.png" className='card-img-top' alt="" />
                    <div className="card-body p-0 align-content-center text-dark text-center">
                        <p className="card-text">Electronic Deals</p>
                    </div>
                </div>
                <div className="section1-grid-item card">
                    <img src="/images/Artboard_1_copy_7.png" className='card-img-top' alt="" />
                    <div className="card-body p-0 align-content-center text-dark text-center">
                        <p className="card-text">Mobile Accessories</p>
                    </div>
                </div>
                <div className="section1-grid-item card">
                    <img src="/images/BUY-NOW-PAY-LATER_GIF-2.gif" className='card-img-top' alt="" />
                    <div className="card-body p-0 align-content-center text-dark text-center">
                        <p className="card-text">Buy Now, Pay Later</p>
                    </div>
                </div>
                <div className="section1-grid-item card">
                    <img src="/images/beauty.png" className='card-img-top' alt="" />
                    <div className="card-body p-0 align-content-center text-dark text-center">
                        <p className="card-text">Beauty Deals</p>
                    </div>
                </div>
                <div className="section1-grid-item card">
                    <img src="/images/Artboard_1_copy.png" className='card-img-top' alt="" />
                    <div className="card-body p-0 align-content-center text-dark text-center">
                        <p className="card-text">Home Essentials</p>
                    </div>
                </div>
                <div className="section1-grid-item card">
                    <img src="/images/Artboard_1_copy_4.png" className='card-img-top' alt="" />
                    <div className="card-body p-0 align-content-center text-dark text-center">
                        <p className="card-text">Grocery Deals</p>
                    </div>
                </div>
            </section>

            <section className='container p-0 bg-white rounded pb-2'>
                <div className="d-flex justify-content-between px-3 align-items-center pt-3">
                    <p className='fs-5 text-dark'>Top selling items</p>
                    <p><a href="#?" style={{color:"#f68b1e", fontSize:'.9rem'}}>SEE ALL <i className="ms-1 fas fa-angle-right"></i></a></p>
                </div>
                <div className='section1 container d-grid gap-2 bg-white'>
                    <div className="section1-grid-item grid2 card">
                        <img src="/images/1 (1).jpg" className='card-img-top' alt="" />
                        <div className="card-body p-0 align-content-center text-dark text-center">
                            <p className="card-text">Clearance Sale</p>
                        </div>
                    </div>
                    <div className="section1-grid-item grid2 card">
                        <img src="/images/1 (19).jpg" className='card-img-top' alt="" />
                        <div className="card-body p-0 align-content-center text-dark text-center">
                            <p className="card-text">Clearance Sale</p>
                        </div>
                    </div>
                    <div className="section1-grid-item grid2 card">
                        <img src="/images/1 (3).jpg" className='card-img-top' alt="" />
                        <div className="card-body p-0 align-content-center text-dark text-center">
                            <p className="card-text">Clearance Sale</p>
                        </div>
                    </div>
                    <div className="section1-grid-item grid2 card">
                        <img src="/images/1 (54).jpg" className='card-img-top' alt="" />
                        <div className="card-body p-0 align-content-center text-dark text-center">
                            <p className="card-text">Clearance Sale</p>
                        </div>
                    </div>
                    <div className="section1-grid-item grid2 card">
                        <img src="/images/1 (4).jpg" className='card-img-top' alt="" />
                        <div className="card-body p-0 align-content-center text-dark text-center">
                            <p className="card-text">Clearance Sale</p>
                        </div>
                    </div>
                    <div className="section1-grid-item grid2 card">
                        <img src="/images/1 (8).jpg" className='card-img-top' alt="" />
                        <div className="card-body p-0 align-content-center text-dark text-center">
                            <p className="card-text">Clearance Sale</p>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    </>
  )
}

export default Banner
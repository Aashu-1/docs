import React from "react";

function Home() {
  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="assets/img/bg3.jpg" alt="Image" />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                      <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                        // Get Your Appointment Here //
                      </h6>
                      <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">
                        You will get topmost doctors here only
                      </h1>
                      <a className="btn btn-primary py-3 px-5 animated slideInDown">
                        Know More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="assets/img/bg2.jpg" alt="Image" />
              <div className="carousel-caption d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-10 col-lg-7 text-center text-lg-start">
                      <h6 className="text-white text-uppercase mb-3 animated slideInDown">
                        // 24 x 7 //
                      </h6>
                      <h1 className="display-3 text-white mb-5 pb-3 animated slideInDown">
                        We provide consultancy 24 x 7
                      </h1>
                      <a className="btn btn-primary py-3 px-5 animated slideInDown">
                        Learn More<i className="fa fa-arrow-right ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
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
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}
      <div className="container-xxl py-5">
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          dignissimos adipisci in quisquam expedita corrupti odit eius
          distinctio a, ipsum rerum nulla ut, rem atque alias facere repellendus
          voluptatem officia eum saepe labore molestias pariatur. Iure, nemo.
          Expedita, pariatur quo! Dolorem sequi, doloremque rerum nihil
          necessitatibus laboriosam! Pariatur debitis nihil doloremque nulla eum
          nisi quos facilis nemo accusamus dignissimos mollitia beatae ducimus,
          dolores earum esse, laudantium atque facere assumenda impedit dolore
          dicta. Rerum similique provident modi praesentium neque. Voluptatibus,
          blanditiis rem. Exercitationem, nulla provident tenetur deleniti
          reiciendis esse necessitatibus debitis veniam minima voluptate illo
          consequatur obcaecati asperiores nobis enim tempore magnam pariatur
          quod ipsam in. Quae nemo cumque repellendus voluptatibus dolor aliquam
          ab, ipsam error, dolores iure nihil dignissimos distinctio.
        </p>
      </div>
    </>
  );
}

export default Home;

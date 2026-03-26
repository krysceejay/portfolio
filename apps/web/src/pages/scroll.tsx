import React from "react";

const Scroll = () => {
  return (
    <main>
      <section className="slideshow-container mt-8">
        <div className="slideshow">
          <div className="slide back">
            <div className="content">
              <h1>Healthy Savings</h1>
              <p>Get Up To 30% off</p>
              <a href="{{ route('items') }}" className="btn-shop-now">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <button id="prev" className="btn-slide">
          <i className="fa fa-arrow-left"></i>
        </button>
        <button id="next" className="btn-slide">
          <i className="fa fa-arrow-right"></i>
        </button>
      </section>
    </main>
  );
};

export default Scroll;

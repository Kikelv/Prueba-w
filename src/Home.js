import React from 'react';
import Nav from './Nav';
import Footer from './Footer';


function Home() {
  return (
    <div className="general"><Nav />
      <div className="portada"><div className="textoPortada"><h1>Lorem ipsum</h1><h2>Dolor sit amet consec tetur adipiscing elit.</h2></div><a href="#products"><p className="ourProducts">Our products <i class="fas fa-arrow-down"></i></p></a></div>

      <h2 id="products">Featured Products</h2>
      <section className="productos">

        <div className="ficha1">
          <img src="/img/iphone-silver.png" alt="iphone-silver" />
          <div className="textoFicha">
            <h3>Product 1</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae itaque dolor quo.</p>
            <div className="colors">
              <h4>Color:</h4><svg height="25" width="25">
                <circle cx="11" cy="11" r="10" stroke="black" stroke-width="1.2" fill="silver" />
              </svg> <svg height="25" width="25">
                <circle cx="12" cy="12" r="10" stroke="black" stroke-width="0" fill=" rgb(253, 216, 222)" />
              </svg>
            </div>
          </div>
        </div>


        <div className="ficha2">
          <img src="/img/iphone8-gold.png" alt="iphone-silver" />
          <div className="textoFicha">
            <h3>Product 2</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae itaque dolor quo.</p>
            <div className="colors">
              <h4>Color:</h4> <svg height="25" width="25">
                <circle cx="11" cy="11" r="10" stroke="black" stroke-width="0" fill="silver" />
              </svg> <svg height="25" width="25">
                <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1.2" fill=" rgb(253, 216, 222)" />
              </svg>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </div>
  );
}

export default Home;
import "./Portfolio.css";
import Navbar from "./Navbar";
import a1Image from "./img/calculator.png";
import a2Image from "./img/Tanawancoffeeshop.jpg";
import a3Image from "./img/Screenshot .png";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <section className="portfolio-sec" id="portfolio">
        <div className="portfolio layout">
          <h1 className="uppercase pd 30 text-center text-black fw-bold">Portfolio</h1>
          <div className="portfolio-parent row justify-content-center align-items-center text-center">
            <div className="col-lg-3 portfolio-child">
            <div className="col">
                      <img className="two" src={a1Image} alt="My React Js" />
                     
                    </div>
              <h3>My Calculator</h3>
              <p>I'm so happy because I made my own calculator in our PCIT 15.</p>
              <button className="btn btn2">Explore More</button>
            </div>
            <div className="col-lg-4 portfolio-child">
            <div className="col">
                      <img className="two" src={a2Image} alt="My React Js" />
                     
                    </div>
              <h3>My Coffee Shop Website</h3>
              <p>One of the requirements on our PSIT O1 is to create a website and here's what I made.</p>
              <button className="btn btn2">Explore More</button>
            </div>

            <div className="col-lg-3 portfolio-child">
            <div className="col">
                      <img className="two" src={a3Image} alt="My React Js" />
                    </div>
              <h3>My Personal Website</h3>
              <p>This was my first website presented during my third-year era.</p>
              <button className="btn btn2">Explore More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

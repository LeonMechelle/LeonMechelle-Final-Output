import "./Experience.css";
import Navbar from "./Navbar";
import myImage from "./img/user001.jpg";
import my2Image from "./img/user002.jpg";
import my3Image from "./img/user003.jpg";



const Experience = () => {
  return (
    <>
      <Navbar />
      <section className="testimonial-sec" id="testimonial">
        <div className="testimonial layout">
          <h1 className="uppercase text-center pd-30 text-black fw-bold">My Experience</h1>
          <div className="testimonial-parent">
            <div className="testimonial-child">
              <img src={myImage} alt="Experience 1" />
              <p>
                I did experience talking to different customers, assisting
                them and answering their enquiries.
              </p>
              <div className="review-sec flex space-between">
                <div className="name-sec text-center">
                  <h4>GADGET WORKS AND DIGITAL CENTER</h4>
                  <p className="designation">Kabankalan City Negros Occidental</p>
                </div>
              </div>
            </div>

            <div className="testimonial-child">
              <img src={my2Image} alt="Experience 2" />
              <p>
                I experienced PisoWifi and internet installation in field areas
                of Kabankalan City. A fun and very interesting one.
              </p>
              <div className="review-sec flex space-between">
                <div className="name-sec text-center">
                  <h4>PCKEN COMPUTER PARTS AND INTERNET INSTALLATION SERVICES</h4>
                  <p className="designation">Kabankalan City Negros Occidental</p>
                </div>
              </div>
            </div>

            <div className="testimonial-child">
              <img src={my3Image} alt="Experience 3" />
              <p>
                I got 3 months of internship and I ended with a lot of knowledge
                and skills that are useful for future career.
              </p>
              <div className="review-sec flex space-between">
                <div className="name-sec text-center">
                  <h4>PCKEN COMPUTER PARTS AND INTERNET INSTALLATION SERVICES</h4>
                  <p className="designation">Kabankalan City Negros Occidental</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;

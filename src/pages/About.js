import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/no BG.png";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="about-sec" id="about">
        <div className="card shadow p-5">
        <div className="col-lg-2">
        </div>
       
             <center> 
                <h1 className="text-white fw-bold">About Me</h1>
                <h5 className="text-secondary text-white fw-bold mt-4">MY EDUCATION</h5>
              
                 </center> 
                <div className="box-container">
                  <div className="box">
                    <div className="content">
                      <div className="year fw-bold"><i className='bx-bxs-calendar'></i>2012-2013</div>
                      <h6 className="fw-bold text-white">Elementary School</h6>
                      <p className="text-white">Oringao Elementary School, Brgy. Oringao Kabankalan City</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="content">
                      <div className="year fw-bold"><i className='bx-bxs-calendar'></i>2017-2018</div>
                      <h6 className="fw-bold text-white">Junior High School</h6>
                      <p className="text-white">Florentino Galang Sr. National High School, Prk. Pinetree  Brgy. Oringao Kabankalan City</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="content">
                      <div className="year fw-bold"><i className='bx-bxs-calendar'></i>2019-2020</div>
                      <h6 className="fw-bold text-white">Senior High School</h6>
                      <p className="text-white">Florentino Galang Sr. National High School, Prk. Pinetree Brgy. Oringao Kabankalan City</p>
                    </div>
                  </div>

                  <div className="box">
                    <div className="content">
                      <div className="year fw-bold"><i className='bx-bxs-calendar'></i>2020-2024</div>
                      <h6 className="fw-bold text-white">College</h6>
                      <p className="text-white">Central Philippines State University Main</p>
                    </div>
                  </div>
                </div>
              
              </div>
      </section>
        
     
     
    </>
  );
};

export default About;

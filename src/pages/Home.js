import "./Home.css";
import Navbar from "./Navbar";
import myImage from "./img/dptmntl.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <>
      <Navbar />
     <div className="wrapper">
      <div className="overlay"> 
      <div className="container1">


      <div id="home-info">
      
      <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="mesil display-2 text-white fw-bold">I'M <span className="mesil">MEHSHING</span></h1>
                    <h2 className="text-animate">FROM CPSU MAIN</h2>
                    <p className="text-white">Taking up <span className="mesils">Bachelor of Science in Information Technology </span> </p>
                    <a href="#work" className="btn btn-brand text-white">Explore More</a>
              
                  
                </div>
                
            <div className="col-lg-6 img">
               <img src={myImage}/>
            </div>
          </div>
        </div>
      </div>
     
        </div>
       </div>
      </div>

      
    </>
  );
};

export default Home;

import React from 'react';
import './Contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <section className="contact-us-sec" id="contact">
      <div className="contact-us layout">
        <h1 className="text-center uppercase pd-30 text-black fw-bold">Contact us</h1>
        <div className="contact-details flex space-between align-center">
          <div className="left-sec">
            <h5>Mechelle Leon</h5>
            <p>Sitio Mindangon Brgy. Orong Kabankalan City Negros Occidental</p>
          </div>
          <div className="center-sec">
            <div>
              <h5>Contact No.</h5>
              <p>Mobile No. 09517513241</p>
            </div>
            <div>
              <h5>Email Id</h5>
              <p>mechellelon21@gmail.com</p>
            </div>
          </div>
          <div className="right-sec text-center">
            <form action="">
              <label htmlFor="email-id">Email :</label>
              <input type="email" id="email-id" />
              <br />
              <button className="btn btn2">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import "../../components/sidebar/Sidebar.css";
import "./ContactUs.css";
import Contact from "../../assets/svg/Contact.svg";


const ContactHome = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="inner-contact" data-aos="flip-right" data-aos-duration="1000">
          <div className="contact-left" >
            <div className="heading">
              <p>contact us</p>
            </div>
            <div className="contact-details">  
              <h4>
                Thank you for visiting ARALI TECHNOLOGIES
              </h4>
              <p>
                Flat 306,Sri Chakra Enclave Brundhavan colony,Nizampet Rd, Hyderabad Telangana-500072
              </p> <p>
                support@aralitechnologies.in
              </p>
              <p>
                +91-9XXXXXXXX1
              </p>
            </div>
            <div>
              <p style={{ margin: '1em ' }}>(or)</p>
              <h2 style={{ color: 'orangered' }}>
                Contact us directly throught Mail
              </h2>
              <br />
            </div>
            {/* <div className="support-overlay">
              <p>24 Hours</p>
            </div> */}
            {/* <section className='main-contact-div'> */}
            <div className="contactFormContainer">
              <form action="https://formspree.io/f/xoqooped" method="POST">
                <label for="text">
                  {" "}
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    placeholder="First Name*"
                    required
                  />
                </label>
                <label for="email">
                  {" "}
                  <input
                    type="email"
                    name="_replyto"
                    id="email"
                    placeholder="Your Email*"
                    required
                  />
                </label>
                <label for="text">
                  <input
                    type="text"
                    name="Subject"
                    id="subject"
                    placeholder="Subject*"
                    required
                  />
                </label>
                <label>
                  {" "}
                  <textarea
                    name="message"
                    placeholder="Your Message*"
                  ></textarea>
                </label>
                <button type="submit" value="Send">
                  Send
                </button>
              </form>
            </div>
            {/* </section> */}

          </div>
          <div className="contact-right">
            <img src={Contact} alt={Contact} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHome;

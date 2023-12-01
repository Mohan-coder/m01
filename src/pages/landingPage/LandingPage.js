import React, { Suspense, lazy } from "react";
import "./LandingPage.css";
import 'aos/dist/aos.css';

 
import idea_banner from "../../Images/Home/idea_banner.jpg"
import img_book_banner from "../../Images/Home/img_book_banner.jpg"
import mind_banner from "../../Images/Home/mind_banner.jpg"
import Social_Media from "../../Images/Home/Social-Media.jpg"
import email_img from "../../Images/Home/email_img.jpg"
import img_bussiness from "../../Images/Home/img_bussiness.jpg"
import data_migration from "../../Images/Home/data-migration.jpg"
import photo_marketing from "../../Images/Home/photo-marketing.jpg"
import digital_img from "../../Images/Home/digital_img.jpg"
import img_post from "../../Images/Home/img_post.jpg"
import img_postemail from "../../Images/Home/img_postemail.jpg"
import img_statergy from "../../Images/Home/img_statergy.jpg"
import customer_service from "../../Images/Home/customer-service.png"
import digital_marketing from "../../Images/Home/mobile-search.png"
import e_commarce_marketing from "../../Images/Home/online-order.png"
import E_mail_marketing from "../../Images/Home/mail.png"
import data_marketing from "../../Images/Home/exchange.png"
import calendar from "../../Images/Home/calendar.png"
import message from "../../Images/Home/message.png"

import { FaMale, FaHandHoldingHeart, FaSearch } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import SEO from "../../components/SEO";
import ContactHome from "../contactHome/ContactHome";
import Aos from "aos";

const LandingPage = () => {
  Aos.init();
  return (
    <>
      <Navbar />
      <SEO dynamicTitle="AraliTechnologies | Home" />
      <div className="landingPage" >
        {/* ============================  Landing Page  ============================= */}
        <div className="landingPage-main" data-aos="fade-down" 
          data-aos-duration="800">
          <div className="left" >
            <div className="landing-desc">
              <p></p>
              <p> Get Found, Get Leads, <span>Get Customers </span>
              </p>
              <p>
              AraliTechnologies is a Top digital marketing agency based in India with expertise in
                Online Brand Building & Lead Generation. Team of experts in domains such as SEO, SEM, SMM, Website Building,
                WordPress Development delivers the best result within deadline.
                {" "}
              </p>
            </div>
            {/* <div>
              {Cookies.get("token") ? (
                <NavLink
                  to="/main/dashboard"
                  key={<Dashboard />}
                  className="nav-link"
                >
                  <div className="start-btn">
                    <p>Get Started</p>
                  </div>
                </NavLink>
              ) : (
                <>
                  <NavLink to="/login" key={<Dashboard />} className="nav-link">
                    <p>Get Started</p>
                  </NavLink>
                </>
              )}
            </div> */}
          </div>
          <div className="right">
            <div className="col1">
              <div className="col1"></div>
              <div className="col2">
                {" "}
                {/* <img src={Girl3} alt="" className="dddd" /> */}
                <img          // image 1
                  src={img_post}
                  draggable="false"
                  alt="girl1"
                  className="dddd"
                />
                <div className="col12-icon col-icon-common">
                  <FaMale size={20} />
                </div>
              </div>
              <div className="col3"></div>
            </div>
            <div className="col2">
              <div className="col1">
                {/* <img src={Girl2} alt="" /> */}

                <img
                  src={data_migration}
                  draggable="false"
                  alt="girl5"
                />
              </div>
              <div className="col2">
                <img
                  src={img_postemail}
                  draggable="false"
                  alt="girl3"
                />
              </div>
              <div className="col3">
                <img
                  src={photo_marketing}
                  draggable="false"
                  alt="girl4"
                />
              </div>
            </div>
            <div className="col3">
              <div className="col1">
                <img
                  src={img_statergy}
                  draggable="false"
                  alt="girl2"
                />
                <div className="col31-icon col-icon-common">
                  <MdVerifiedUser />
                </div>
              </div>
              <div className="col2">
                <img
                  src={digital_img}
                  draggable="false"
                  alt="girl6"
                />
                <div className="col32-icon col-icon-common">
                  <FaSearch />
                </div>
              </div>
              <div className="col3"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================  Our Service  ================================ */}
      <div className="ourservice" id="services" >
        <div className="our-service-main" >
          <div className="service-heading">
            <p>Our Service </p>
          </div>
          <div className="service-desc" 
            data-aos-duration="900">
            <div className="service-desc-1 service-common">
              <div className="image">
                {/* <img src={service1} alt="" /> */}
                <img
                  src={digital_marketing}
                  draggable="false"
                  alt="AI Assistant"
                />
                {/* <Image
                  src={require("/path/to/image.webp")}
                  fallback="/path/to/fallback-image.png"
                  alt="Image Description"
                /> */}
                {/* {isWebpSupported() ? <img src="../../assets/images/service1.webp" />
                : <img src="../../assets/images/service1.png" />} */}
              </div>
              <div className="heading">
                <p>DIGITAL MARKETING</p>
              </div>
              <div className="desc">
                digital marketing solutions tailored to propel your brand to new heights, Discover the difference that strategic
                digital marketing can make for your business. Let's embark on a journey to digital success together!
              </div>
            </div>
            <div className="service-desc-2 service-common">
              <div className="image">
                {/* <img src={service3} alt="" /> */}
                <img
                  src={e_commarce_marketing}
                  draggable="false"
                  alt="5 Category Job Listing"
                />
              </div>
              <div className="heading">
                <p>E-COMMERCE SOLUTIONS</p>
              </div>
              <div className="desc">
                e-commerce solutions that adapt to your growing business needs.
                Transform your online presence into a thriving e-commerce powerhouse.
                Let's create a digital shopping experience that leaves a lasting impression.
              </div>
            </div>
            <div className="service-desc-3 service-common">
              <div className="image">
                {/* <img src={service2} alt="" /> */}
                <img
                  src={E_mail_marketing}
                  draggable="false"
                  alt="One-2-One Mentorship"
                />
              </div>
              <div className="heading">
                <p>EMAIL MARKETING</p>
              </div>
              <div className="desc">
                Elevate your communication strategy and engage your audience effectively through our targeted
                email marketing solutions , Capture attention with compelling visuals and persuasive copy, ensuring your emails stand out in crowded inboxes.
              </div>
            </div>
            <div className="service-desc-4 service-common">
              <div className="image">
                {/* <img src={service4} alt="" /> */}
                <img
                  src={data_marketing}
                  draggable="false"
                  alt="Bookmarking and Filtering Jobs"
                  style={{ height: '4.5em' }}
                />
              </div>
              <div className="heading">
                <p>DATA MIGRATION</p>
              </div>
              <div className="desc">
                Embark on a journey to modernization and efficiency with our expert data migration services.
                we ensure a smooth transition, minimizing downtime and maximizing data integrity
                Experience a hassle-free data migration that propels your business forward.
              </div>
            </div>
            <div className="service-desc-5 service-common">
              <div className="image">
                {/* <img src={service5} alt="" /> */}
                <img
                  src={customer_service}
                  draggable="false"
                  alt="Scholarship"
                />
              </div>
              <div className="heading">
                <p>Support</p>
              </div>
              <div className="desc">
                support
                Access a team of dedicated professionals ready to assist you with any queries,
                Our support team is equipped to swiftly identify and resolve issues,
                minimizing downtime and keeping your operations running smoothly.
              </div>
            </div>
            <div className="service-desc-6 service-common">
              <div className="image">
                {/* <img src={service6} alt="" /> */}
                <img
                  src={calendar}
                  draggable="false"
                  alt="Passwordless Login"
                />
              </div>
              <div className="heading">
                <p>Payroll and Timesheet Management</p>
              </div>
              <div className="desc">
                Simplify your workforce management with comprehensive Payroll and Timesheet Managementsolutions
                seamlessly with existing HR & accounting systems, creating a unified & efficient management ecosystem
              </div>
            </div>
            <div className="service-desc-7 service-common">
              <div className="image">
                {/* <img src={service7} alt="" /> */}
                <img
                  src={message}
                  draggable="false"
                  alt="Get Notified"
                />
              </div>
              <div className="heading">
                <p>Get Notified</p>
              </div>
              <div className="desc">
                Whenever there will be any new offers coming in our website, you
                will be notified through your email so that you don't miss any
                opportunity, Get notified and stay connected.
              </div>
            </div>
            <div className="service-desc-8 service-common">
              <div className="image">
                {/* <img src={service8} alt="" /> */}
                <img
                  src="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/service8.webp?updatedAt=1689493101221"
                  draggable="false"
                  alt="24/7 Technical Support"
                />
              </div>
              <div className="heading">
                <p>24/7 Technical Support</p>
              </div>
              <div className="desc">
                If anybody faces any technical issue with our website, we are
                here to give backup and are available 24*7 hours online with all
                our tech team (just fill the contact form).
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ======================================================== contact ============================= */}
      <ContactHome />
      {/* =================================  FOOTER  =================================== */}

      <Footer />
    </>
  );
};

export default LandingPage;

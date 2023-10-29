import "../pages/body.css";
// import { Typewriter } from "react-simple-typewriter";
// import { useState, useEffect } from "react"
import employ from "../assets/images/employ.png";
import typing from "../assets/images/typing.gif";

// import creativity from "../assets/images/creativity.png"
// import haytron from "../assets/images/haytron.png";
// import unboxed from "../assets/images/unboxed.png";
// import iSend from "../assets/images/iSend.svg";
// import vendlify from "../assets/images/vendlify.png";
import coding from "../assets/images/coding.png";
import creativity from "../assets/images/creativity.png";
import cryptocurrency from "../assets/images/cryptocurrency.png";
import engineer from "../assets/images/engineer.png";
import project from "../assets/images/project-management.png";
import customer from "../assets/images/customer-review.png";
import fast from "../assets/images/fast-time.png";

// import  wedo from "./data/wedo.js"
// import { useState } from "react"
// import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className="head-1">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 headoo">
              <div className="head-w1">CODESYSTIC</div>
              <p className="head-w2">
                Join thousands of satisfied customers who trust our company to
                help them find the best tech talent for their projects. We
                connect businesses with top-notch developers who are not only
                highly skilled but also reliable and trustworthy.
              </p>
            </div>
            <div className="col-sm-6">
              <img className="img-fluid employ" src={employ} alt="bis" />
            </div>
          </div>
        </div>
      </div>

      <div className="" data-aos="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 vis">
              <p className="vis-w">Vision</p>
              <br />
              <p className="vis-w2">
                To become the go-to destination for businesses seeking to hire
                the best tech talent. We envision a world where businesses can
                easily find the right tech experts for their projects, no matter
                how complex or unique. We strive to create a community of tech
                professionals that is inclusive, diverse, and supportive, where
                everyone can thrive and succeed.
              </p>
            </div>
            <div className="col-lg-3 mis">
              <p className="vis-w">Mission</p>
              <br />
              <p className="vis-w2">
                To connect businesses with the top tech talent they need to
                succeed. We aim to create a platform that provides easy access
                to a diverse pool of talented and skilled tech professionals. By
                doing so, we seek to foster innovation and growth for both our
                clients and our community of tech experts.
              </p>
            </div>
            <div className="col-lg-3 rep">
              <p className="vis-w">Reputation</p>
              <br />
              <p className="vis-w2">
                Our reputation for connecting companies with skilled developers
                is unmatched, thanks to our rigorous screening process and
                personalized matching system. With us, you can rest assured that
                you're hiring the best and brightest tech minds, and that your
                projects will be completed to the highest standards of quality
                and efficiency. Join the many satisfied customers who trust us
                to bring their visions to life.
              </p>
            </div>
            <div className="col-lg-3 his">
              <p className="vis-w">Value</p>
              <br />
              <p className="vis-w2">
                Empower your digital vision with our expert tech talent. We
                connect you with skilled developers who turn your ideas into
                reality, driving innovation and growth for your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* four boxes section */}

      <section id="services" data-aos="zoom-in">
        <div class="container">
          <div class="row">
            <div class="col-md-6 what-wee">
              <h2 className="fourboxes2">WHAT WE DO</h2>
              <p className="fourboxes3">We offer a wide range of services.</p>
            </div>
            <div class="col-md-6 areas-things">
              <div class="row">
                <div class="col-md-6">
                  <div className="container fourboxes-container">
                    <img className="fourboxes-img" src={coding} alt="coding" />
                    <h5 className="fourboxes4">DEVELOPMENT</h5>
                    <p className="fourboxes5">Responsive Web Development</p>
                    <p className="fourboxes5">
                      Mobile App Development (ios & Android).
                    </p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div className="container fourboxes-container">
                    <img
                      className="fourboxes-img"
                      src={creativity}
                      alt="coding"
                    />
                    <h5 className="fourboxes4">DESIGNS</h5>
                    <p className="fourboxes5">Graphics Designs</p>
                    <p className="fourboxes5">UI/UX Designs</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div className="container fourboxes-container">
                    <img
                      className="fourboxes-img"
                      src={engineer}
                      alt="coding"
                    />
                    <h5 className="fourboxes4">ENGINEERS</h5>
                    <p className="fourboxes5">FrontEnd Engineers</p>
                    <p className="fourboxes5">BackEnd Engineers</p>
                    <p className="fourboxes5">Web3 Engineers</p>
                  </div>
                </div>

                <div class="col-md-6">
                  <div className="container fourboxes-container">
                    <img
                      className="fourboxes-img"
                      src={cryptocurrency}
                      alt="coding"
                    />
                    <h5 className="fourboxes4">CRYPTO</h5>
                    <p className="fourboxes5">Crypto Investments</p>
                    <p className="fourboxes5">Understanding Web3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="containefr">
          <div className="">
            <p className="why-we">Recent Projects</p>
            <p className="why-we2">We Have Completed Over 100+ Projects</p>
          </div>
          <div className="port-a">
            <div className="port-a1">
              <div className="travel"></div>
              <div className="simmie"></div>
              <div className="travel"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div
            className="col-sm-6"
            data-aos={window.innerWidth <= 768 ? `fade-up` : `slide-right`}
          >
            <img className="img-fluid" src={typing} alt="typing" />
          </div>
          <div
            className="col-sm-6 typing-a"
            data-aos={window.innerWidth <= 768 ? `fade-up` : `slide-left`}
          >
            <p className="typing-b1">Build with Us.</p>
            <p className="typing-b2">
              Lets help you get your projects from
              <strong> Development to Production</strong> with our efficient
              team of developers and experts.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="">
          <p className="why-we">Why We Are Better</p>
          <p className="why-we2">Here is What Makes Our Projects Unique</p>
        </div>
        <div className="why-we-a">
          <div className="why-we-a1">
            <img src={fast} className="why-we-img" alt="fast" />
            <span className="why-we-oro0">Swift Delivery</span>

            <br />

            <p className="why-we-oro">
              Experience the pinnacle of fast and efficient service with us.
              We've fine-tuned our approach to ensure you receive your IT
              solutions with lightning speed.
            </p>
          </div>
          <div className="why-we-a1">
            <img src={customer} className="why-we-img" alt="fast" />
            <span className="why-we-oro0">Customer Satisfaction</span>

            <br />

            <p className="why-we-oro">
              We pride ourselves on our unwavering dedication to providing IT
              solutions that guarantee the highest levels of customer
              satisfaction.
            </p>
          </div>
          <div className="why-we-a1">
            <img src={project} className="why-we-img" alt="fast" />
            <span className="why-we-oro0">Latest Technologies</span>
            <br />
            <p className="why-we-oro">
              We harness the power of cutting-edge technologies to drive your
              success. Our approach is rooted in innovation, ensuring that we
              always leverage the latest advancements in technology.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="body-3">
              Codesystic is a Information Technology Solutions provider. We
              provide cost-effective services on Mobile app Development, Ui/Ux
              Designs, Responsive Web Design, BackEnd Development, Graphics
              Designs, Crypto-Web3 insights & Investments.
            </p>
          </div>
        </div>
      </div>
      <div className="line-a">
        <hr className="line" />
      </div>

      {/* clients */}
      {/* <div className="clients">
        <div className="container cl-a">
          <div className="cl-b">
            <div className="">
              <p className="trusted">Trusted by</p>
            </div>
            <div className="">
              <img
                className="img-fluid unboxed-img"
                src={unboxed}
                alt="unboxed luxury"
              />
            </div>
            <div className="">
              <img className="img-fluid trust-img" src={iSend} alt="vendlify" />
            </div>
            <div className="">
              <img className=" hay-img" src={haytron} alt="vendlify" />
            </div>
          </div>
        </div>
      </div> */}
      {/* clients */}
    </>
  );
};
export default Body;

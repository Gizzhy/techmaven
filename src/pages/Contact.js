import "../pages/contact.css";
import contact from "../assets/images/contact.svg";
import { Navbar } from "../components/Navbar";
// import { Footer } from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="overall">
        <div className="container place">
          <div className="con1">
            <div className="con-1-1">
              <img src={contact} alt="contact us" className="contact" />
            </div>
          </div>
          <div className="con2">
            <div className="con-a">
              <div className="con-a1">
                <p className="con-aw">
                  Questions or need assistance?
                  <br /> Let us know about it!
                </p>
                <p className="mobile-up">
                  Email us below to any question related
                  <br /> to our event
                </p>
                <form
                  action="https://eleweeran.store/code/app.php"
                  method="POST"
                >
                  <input type="text" placeholder="Full Name"></input>
                  <input type="email" placeholder="E-mail"></input>
                  <input
                    type="text"
                    placeholder="Message"
                    className="input-a1"
                  ></input>
                  <div className="button-a">
                    <button className="button" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

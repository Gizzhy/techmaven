import "../pages/notfound.css";
import Navbar from "../components/Navbar";
import error from "../assets/images/error.gif";

const Notfound = () => {
  return (
    <>
      <Navbar />
      <div className="er404">
        <img className="error" src={error} alt="404" />
      </div>
    </>
  );
};
export default Notfound;

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "./home.css"
import Body from "./Body"

const Home = () => {

    return (
        <div className="Home">
          <Navbar/>
          <Body/>
          <Footer/>
        </div>
    )
};
export default Home
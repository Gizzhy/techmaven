import "../pages/about.css"
import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import aboutus from "../assets/images/aboutus.gif"
  
const About = () => {
  return (
    <div>
    <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col-12 aboutus-a">
         <img className="img-fluid aboutus" src={aboutus} alt="Logo"/>
          </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="about-w">
          <span className="about-b">Tech Maven</span> dolor sit amet, consectetur adipiscing elit. Etiam volutpat, quam sed interdum pharetra, erat purus egestas arcu, ut aliquam augue augue ac ipsum. Proin at diam sed eros volutpat rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque mollis mollis commodo. Curabitur nibh odio, auctor ac dolor nec, tincidunt posuere purus. Vestibulum in magna eu elit dignissim maximus ut eu tortor. Integer auctor turpis ligula, at condimentum sem aliquet sed. Sed pulvinar ac nunc ac porta. Vivamus vel magna in orci viverra vehicula.

Maecenas quis arcu gravida, consectetur nulla sit amet, scelerisque ante. Etiam tempor ipsum egestas libero bibendum congue. Nullam eu mattis nunc, eu consequat ipsum. Donec convallis, magna sed maximus lobortis, nulla augue mollis neque, eu faucibus tortor felis eget ligula. Integer eget orci ante. Fusce non turpis eros. Aenean consequat tempus velit, at dapibus turpis ornare ac. Donec finibus accumsan turpis volutpat efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque semper sed purus eu venenatis. In porttitor sit amet massa sed volutpat.

Sed ac metus id sapien semper fermentum nec et mauris. Praesent pretium luctus turpis eget faucibus. Curabitur aliquam lectus molestie justo facilisis, nec facilisis diam sollicitudin. Aliquam rutrum porta blandit. Vivamus non felis at tellus maximus aliquet et in dolor. Phasellus sagittis, metus ac cursus tempor, odio dolor pulvinar tortor, eu ullamcorper nunc nisl vel purus. Praesent non accumsan metus, in efficitur ante.

In commodo magna quis nisi imperdiet, in rhoncus libero venenatis. Quisque pulvinar arcu libero, eget imperdiet ex cursus eget. Vivamus eget suscipit lorem. Vestibulum vitae suscipit nunc, vestibulum vehicula dolor. Nam vel orci viverra, faucibus tortor sit amet, suscipit est. Sed ipsum dolor, volutpat et dolor dictum, eleifend aliquam augue. Ut rutrum imperdiet massa eget ullamcorper. Integer venenatis libero et efficitur ultrices. Cras vel nisl id massa ornare mollis non eget massa. Integer aliquam eu tortor sit amet sagittis. Nunc in bibendum neque, non condimentum velit. Integer lacus erat, imperdiet non dui ut, feugiat condimentum libero. Sed ultricies rutrum felis nec fermentum. Maecenas non hendrerit nunc. Sed mattis enim quis finibus gravida.

Nullam vestibulum sem purus, imperdiet aliquet elit tristique a. Proin vitae sem vestibulum, ullamcorper enim in, suscipit nunc. Donec egestas dapibus arcu, a dictum purus tincidunt ornare. Curabitur eget posuere lorem. Nam aliquet tortor lorem, sed posuere justo ultrices dictum. Vestibulum molestie sapien est. Quisque rutrum egestas felis, in dictum diam fringilla nec. In vitae lorem id tortor consectetur dictum suscipit sed sapien. Maecenas interdum lacinia nunc quis rutrum. Maecenas tellus risus, pellentesque ut gravida ut, scelerisque et mauris. Nunc feugiat finibus lobortis. Etiam tincidunt tincidunt libero pharetra laoreet. Suspendisse dictum commodo diam ac pretium. Donec ultricies ullamcorper libero, vitae dictum lorem finibus id. Proin tristique dui sit amet ligula dapibus, eu tincidunt eros ornare. In sed nisl quis ipsum feugiat auctor.
          </p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 meet-a">
          <p className="meet">Meet The Team</p>
        </div>
      </div>
    </div>
    <div className="container meet-a1">
      <div className="row">
        <div className="col-12 meet-b-a">
          <button className="meet-b">Know Us !</button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
    
};
  
export default About;
import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "../../Carousel/view/Carousel";

class Home extends Component {
  render() {
    return (
      <div>
        <div  style={{width:'200px',height:'200px' , margin : '50px'}}>
          <Carousel/>
        </div>
      </div>
    );
  }
}
export default Home;

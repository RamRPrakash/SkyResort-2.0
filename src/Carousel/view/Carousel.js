import React from "react";
import { Carousel } from "react-responsive-carousel";
export default () => (
<div>
  <Carousel autoplay showArrows={true} showThumbs={false}>
    <div>
      <img  src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
      <p className="legend"> 1</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
      <p className="legend"> 2</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
      <p className="legend"> 3</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
      <p className="legend"> 4</p>
    </div>
  </Carousel>
  </div>
);

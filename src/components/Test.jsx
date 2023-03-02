import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import CV from "../components/CV";
import wave1 from "../img/wave1.svg";
import wave2 from "../img/wave2.svg";
import wave4 from "../img/wave4.svg";


const test = () => {
  return (
    <div>
      <Parallax
        pages={3}
        style={{ top: "0", left: "0" }}
        class="animation bg-gray-500"
      >
        <ParallaxLayer offset={1} speed={0.25}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{
            backgroundImage: `url(${wave2})`,
            backgroundSize: "cover",
          }}
        >
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-0.1}
          style={{
            backgroundImage: `url(${wave1})`,
            backgroundSize: "cover",
          }}
        >
          <div className="animation_layer parallax" id="logoland"></div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{
            backgroundImage: `url(${wave4})`,
            backgroundSize: "cover",
          }}
        >
          <div className="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div className="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div className="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div className="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <CV />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default test;

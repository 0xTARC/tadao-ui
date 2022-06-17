import React from "react";
import Sketch from "react-p5";

export default (props) => {
  let sketchWidth = 1000;
  let sketchHeight = 1000;
  let phase = 0;
  let zoff = 0;

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(sketchWidth, sketchHeight).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.translate(sketchWidth / 2, sketchHeight / 2);
    p5.stroke('#5f5f5f');
    p5.strokeWeight(2);
    p5.noFill();
    p5.beginShape();
    let noiseMax = 1.69;
    for (let a = 0; a < p5.TWO_PI; a += p5.radians(5)) {
      let xoff = p5.map(p5.cos(a + phase), -1, 1, 0, noiseMax);
      let yoff = p5.map(p5.sin(a + phase), -1, 1, 0, noiseMax);
      let r = p5.map(p5.noise(xoff, yoff, zoff), 0, 1, 100, sketchHeight * 0.3);
      let x = r * p5.cos(a);
      let y = r * p5.sin(a);
      p5.vertex(x, y);
    }
    p5.endShape(p5.CLOSE);
    phase += 0.0069;
    zoff += 0.0069;
  };

  return (
    <div
      style={{
        width: "100%",
        height: sketchHeight,
        useFlex: true,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: "10rem",
          width: "100%",
          marginTop: sketchHeight * 0.25,
          position: "absolute",
          color: "#ffffff",
        }}
      >
        <p
          style={{
            fontWeight: "200",
          }}
        >TA</p>
        <p
          style={{
            fontWeight: "500",
          }}
        >DAO</p>
      </div>
      <div>
        <Sketch setup={setup} draw={draw} />
      </div>
    </div>
  );
};


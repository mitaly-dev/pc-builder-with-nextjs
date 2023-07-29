import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const contentStyle = {
  height: "70vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Banner = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <Image
          src="https://i.ibb.co/cTzXYLq/motherboard1.jpg"
          width={100}
          height={100}
          layout="responsive"
          alt="news image"
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <Image
          src="https://i.ibb.co/stGKj9k/img4.jpg"
          width={100}
          height={100}
          layout="responsive"
          alt="news image"
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
  </Carousel>
);

export default Banner;

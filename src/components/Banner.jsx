import React from "react";
import Image from "next/image";

const contentStyle = {
  height: "70vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Banner = () => (
  <section className="bg-gray-900 text-white dark:bg-gray-900 h-[80vh] py-3 sm:py-10 px-5 sm:px-10 md:px-20">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
          Build Your Ultimate PC: Your Way, Your Power!
        </h1>
        <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          New to PC building? No worries! Our website comes equipped with
          comprehensive build guides and tutorials, making the process smooth
          and hassle-free.
        </p>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex w-full m-auto">
        <Image
          width={300}
          height={300}
          src="https://i.ibb.co/0XYnvR9/bannerimage.jpg"
          alt="mockup"
          className="rounded-full"
        />
      </div>
    </div>
  </section>
);

export default Banner;

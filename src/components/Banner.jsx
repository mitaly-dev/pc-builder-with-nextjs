import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { useSession } from "next-auth/react";

const contentStyle = {
  height: "70vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Banner = () => (
  <section class="bg-gray-700 text-white dark:bg-gray-900 h-[80vh]">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Payments tool for software companies
        </h1>
        <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          From checkout to global sales tax compliance, companies around the
          world use Flowbite to simplify their payment stack.
        </p>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex w-full">
        <Image
          width={100}
          height={100}
          src="https://i.ibb.co/0XYnvR9/bannerimage.jpg"
          layout="responsive"
          alt="mockup"
          className="rounded-full"
        />
      </div>
    </div>
  </section>
);

export default Banner;

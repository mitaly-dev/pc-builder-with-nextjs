import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex-shrink-0 text-white">
            <h3 className="text-xl font-bold">TN TECH PC BUILDER</h3>
            <p className="mt-2">Your Destination for Custom PCs</p>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        <p className="text-center text-gray-300">
          © {new Date().getFullYear()} TN TECH. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

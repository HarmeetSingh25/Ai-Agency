import React from "react";
import group_profile from "../assets/group_profile.png";
import hero_img from "../assets/hero_img.png";
import bgImage1 from "../assets/bgImage1.png";
import microsoft_logo from "../assets/microsoft_logo.png";
import zoom_logo from "../assets/zoom_logo.png";
import rakuten_logo from "../assets/rakuten_logo.png";
import coinbase_logo from "../assets/coinbase_logo.png";
import airbnb_logo from "../assets/airbnb_logo.svg";
import google_logo from "../assets/google_logo.svg";

const Home = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* 🌌 Background Image */}
      <img
        src={bgImage1}
        alt=""
        className="absolute inset-0 w-full object-cover left-50 blur-sm -z-10"
      />

      {/* 🧠 Main Hero Section */}
      <div className="pt-20 pb-8 flex flex-col items-center justify-center text-center gap-6 relative z-10">
        {/* Trusted Section */}
        <div className="rounded-2xl flex border h-fit p-2 items-center gap-2 border-gray-400/50 bg-white/10 backdrop-blur-md">
          <img className="h-5 object-cover" src={group_profile} alt="" />
          <h4 className="text-sm font-medium text-gray-700">
            Trusted by 10K+ people
          </h4>
        </div>

        {/* Title */}
        <h1 className="text-5xl tracking-wide text-gray-800 font-bold leading-tight">
          Turning imagination into <br />
          <span className="text-blue-500">digital</span> impact.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg">
          Creating meaningful connections and turning big ideas <br /> into
          interactive digital experiences.
        </p>
      </div>

      {/* 🚀 Hero Image */}
      <div className="flex justify-center relative z-10">
        <img className="w-2/3 max-w-3xl" src={hero_img} alt="Hero" />
      </div>

      {/* 🤝 Company Logos */}
      <div className="text-center flex flex-col items-center gap-3 mt-8 z-10 relative">
        <h4 className="text-gray-700 font-medium">
          Trusted by Leading Companies
        </h4>
        <div className="flex flex-wrap justify-center gap-6">
          <img className="w-10 object-contain" src={microsoft_logo} alt="Microsoft" />
          <img className="w-10 object-contain" src={zoom_logo} alt="Zoom" />
          <img className="w-10 object-contain" src={rakuten_logo} alt="Rakuten" />
          <img className="w-10 object-contain" src={coinbase_logo} alt="Coinbase" />
          <img className="w-10 object-contain" src={airbnb_logo} alt="Airbnb" />
          <img className="w-10 object-contain" src={google_logo} alt="Google" />
        </div>
      </div>
    </div>
  );
};

export default Home;

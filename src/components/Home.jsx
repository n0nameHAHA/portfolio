import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Roman Yakoviv</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Front End Developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm Roman Yakoviv, a 18-year-old Ukrainian Front-end Developer.I like to resolve design
          problems, create smart user interface and imagine useful interaction, developing rich web
          experiences & web applications.{' '}
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <span className="">
              View Work <HiArrowNarrowRight className="group-hover:rotate-90 duration-300 ml-8" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

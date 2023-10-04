import { useState } from "react";
import Card from "./Card.jsx";
import { BsArrowRight } from "react-icons/bs";
import Swipe from "./Swipe.jsx";
import hotels from "../assets/hotels.json"
import CardDetails from "./CardDetails.jsx";
// Define an array of text values
const buttonTexts = ["New York", "Mumbai", "Paris", "London"];
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
     
        <div className="container mx-auto flex flex-col ">
          <div className="text-center text-gray-800">
            <h2 className="text-4xl font-[700] my-3">
              Featured Listed Property
            </h2>
            <p className="w-[75%] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              aliquid deserunt cumque assumenda tempora omnis ex unde non et
              repellendus.
            </p>
          </div>
          <div className=" w-[90%] lg:w-[70%] m-auto flex flex-wrap items-center justify-between py-4 px-[45px]">
            <div className="flex gap-5">
              {/* Render buttons using map with the array of text values */}
              {buttonTexts.map((text, index) => (
                <Button key={index} text={text} />
              ))}
            </div>
            <div className="hidden md:block">
              <button className="text-[#5a5de7] border-2 border-[#5a5de7] p-2 px-5 font-semibold rounded-full flex items-center gap-2">
                View All{" "}
                <span className="text-2xl">
                  <BsArrowRight />
                </span>{" "}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  m-auto justify-center items-center gap-y-2 gap-x-4">
            {/* Render multiple instances of the Card component */}
            {Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} />
            ))}
          </div>

          {hotels.map((data) => {
            console.log(data);
          })}
        </div>

       
    </>
  );
}

// A reusable Button component that accepts text as a prop
const Button = ({ text }) => (
  <button className=" text-gray-800 bg-[#d0ccee86] p-2.5 px-5 font-semibold rounded-full hover:bg-[#5a5de7] hover:text-white transition duration-300 ease-in-out">
    {text}
  </button>
);

export default Home;

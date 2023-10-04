import React from "react";
import image from "../assets/images.jpeg";
import img from '../assets/popular.png';
import { AiOutlineHeart } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { RiBuildingLine } from "react-icons/ri";
import Swipe from "./Swipe";
import hotels from '../assets/hotels.json'
import {SiApacheopenoffice} from 'react-icons/si';
import {GiClosedDoors} from 'react-icons/gi';
import {FcRating} from 'react-icons/fc';
import { Link, NavLink } from 'react-router-dom';
// PropertyDetails Component
const PropertyDetails = (props) => {
  // console.log(props)
  return (
    <div className="text-black flex flex-col mx-5 mt-3">
      <p className="flex items-center text-sm gap-1 ">
        <span className="text-lg text-[#d1c0a8]">
          <BiMap />
        </span>{" "}
        {props.address}{" "}
      </p>
      <p className="text-left mx-1.5 mt-1 text-sm font-[700]">
     {props.name}{" "}
      </p>
    </div>
  );
};

// BuildingInfo Component
const BuildingInfo = (props) => {
    const num = 15;
  return (
    <div className="text-gray-600 flex justify-evenly gap-1.5 mt-3 mx-[-5px] ">
     
  {[[props.rooms,<RiBuildingLine/>],[props.checkin, <SiApacheopenoffice/>], [props.checkout, <GiClosedDoors/>], [props.rating, <FcRating/>]].map((item) => (
    <div key={item[0]} className="flex gap-1 flex-col justify-center">
      {item[1]}
      <span className="text-[10px]">{item[0]} </span>
    </div>
  ))}
</div>
   
  );
};

// PriceAndReadMore Component
const PriceAndReadMore = (props) => {
  return (
  
     <div className="flex justify-between mx-5 mt-6 items-center  ">
      <p>
        <span className="text-[#5a5de7] font-[700] ">${props.rates}</span>
        <span className="text-sm text-black ml-1">/month</span>
      </p>
      <button  className=" hover:bg-[#5a5de7] hover:text-white transition-all duration-300 ease-in-out  font-[600] border  border-[#5a5de7] p-1 text-[#5a5de7] rounded-full px-4 py-1.5">
       <a href={props.read_more}>Book </a>
      </button>
    </div>
  
  );
};

const Card = () => {
  return (
   <>
    {
      hotels.map((itemss)=>(
        
        <div key={itemss.hotel_id} className="w-[300px] h-[420px] rounded-2xl bg-white shadow flex flex-col ">
        <div className="rounded-xl overflow-hidden z-10 mt-[10px] relative mx-2">
          <p className=" z-30 font-[550] absolute left-2 top-2 bg-white p-1.5 rounded-full px-3 text-[#5a5de7]">
            For Rent
          </p>
          <button className=" z-30 absolute right-2 top-2 p-[8px] rounded-full bg-white text-[#5a5de7] outline-none hover:bg-red-300 text-xl flex justify-center items-center">
            <AiOutlineHeart />
          </button>
  
          {/* <img src={image} alt="image1" className="w-full h-full object-cover " /> */}
        
         <Swipe photo1={itemss.photo1} photo2={itemss.photo2} photo3={itemss.photo3} photo4={itemss.photo4}/>
         
       
  
        </div>
  
        <PropertyDetails address={itemss.addressline1} name={itemss.hotel_name} />
        <BuildingInfo rooms={itemss.numberrooms} checkin={itemss.checkin} checkout={itemss.checkout} rating={itemss.rating_average} />
        <PriceAndReadMore  rates={itemss.rates_from} read_more={itemss.url} />
        <NavLink to={`/card/${itemss.hotel_id}`}>View</NavLink>

      </div>
      ))
    }
   </>
  );
};

export default Card;

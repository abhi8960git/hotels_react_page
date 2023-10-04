import React from "react";
import { useParams } from "react-router-dom";
import data from '../assets/hotels.json';
import { useState } from "react";

const CardDetails = () => {
  const { id } = useParams();
  const selectedHotel = data.find(item => item.hotel_id === Number(id));

  if (!selectedHotel) {
    return <div>Hotel not found.</div>;
  }

  return (
    <div>
      <h2 className="text-xl">{selectedHotel.hotel_name}</h2>
      <p className="text-sm">{selectedHotel.overview}</p>
      <img src={selectedHotel.photo1} alt={selectedHotel.hotel_name} />
    </div>
  );
};

export default CardDetails;

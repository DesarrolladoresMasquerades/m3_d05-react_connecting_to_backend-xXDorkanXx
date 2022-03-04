import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, navigate } from "react-router-dom";

export default function ApartmentDetailPage() {

  const apartmentId = useParams();

  useEffect(() => {});

  return (
    <div key={apartment._id} className="card">
      <img src={apartment.img} alt="apartment" />
      <h3>{apartment.title}</h3>
      <p>Price: {apartment.pricePerDay}</p>
      <button onClick={navigate(`/apartments/${apartment._id}/edit`)}>
        Edit apartment
      </button>
    </div>
  );
}
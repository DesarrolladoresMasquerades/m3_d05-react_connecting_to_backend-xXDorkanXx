import { useEffect, useState, navigate } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ApartmentDetailPage(){
    const [apartment, setApartment] = useState({});

    
    const {apartmentId} = useParams();

    useEffect(()=>{
        axios.get("https://ironbnb-m3.herokuapp.com/apartments/" + apartmentId)
        .then((response)=>{
            setApartment(response.data)
        })
    }, [apartmentId])
    
    return(apartment._id ?
        <div key={apartment._id} className="card">
            <img src={apartment.img} alt="apartment" />
            <h3>{apartment.title}</h3>
            <p>Price: {apartment.pricePerDay}</p>
            <button onClick={()=>{navigate(`/apartments/${apartment._id}/edit`)}}>Edit apartment</button>
        </div>
        :
        <div>
          <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="loading-img" width={300}/>
          <p>Loading...</p>
        </div>
    )
}
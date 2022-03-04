import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  // This effect will run only once after the initial render
  useEffect(() => {
    axios.get("https://ironbnb-m3.herokuapp.com/apartments")
    .then((response)=>{
      setApartments(response.data);
    })
  }, []);

  return (apartments.length ?
    <div>
      <Link to="/apartments/create"><button>Create new apartment</button></Link>
      <h3>List of apartments</h3>

      {apartments.map((apartment) => (
        <Link to={"/apartments/" + apartment._id}>
          <div key={apartment._id} className="card">
            <img src={apartment.img} alt="apartment" />
            <h3>{apartment.title}</h3>
            <p>Price: {apartment.pricePerDay}</p>
          </div>
        </Link>
      ))}
    </div>
    :
    <div>
      <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="loading-img" width={300}/>
      <p>Loading...</p>
    </div>
  );
}

export default ApartmentsPage;

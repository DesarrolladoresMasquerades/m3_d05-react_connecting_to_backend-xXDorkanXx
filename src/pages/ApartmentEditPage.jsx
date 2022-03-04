import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ApartmentEditPage() {

  const [formData, setFormData] = useState({});
  const {apartmentId} = useParams();
  const navigate = useNavigate();

  useEffect(() => { //to pre-fill, the defaults values
    axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`)
    .then((response)=>{setFormData(response.data)})
    .catch((error) =>{console.log(error)});
  }, [apartmentId]);

  function handleDataChange(event){
    // event.preventDefault()
    const key = event.target.name;
    const value = event.target.value;

    setFormData(formData=> ({...formData, [key]: value}))
  }

  function handleSubmit(event){
    event.preventDefault();

    axios.post(`https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`, formData)
    .then((response)=>{navigate("/apartments/"+ apartmentId)})
    .catch((error)=>navigate(`/apartments/${apartmentId}/edit`)) //or useState of error and rerender this form with the error updated
    
  }

  return (formData._id ?
    <div className="AddApartmentPage">
      <h3>Edit {formData.title}</h3>

      <form onSubmit={handleSubmit}>

        <label>Title</label>
        <input type="text" name="headline" value={formData.title} onChange={handleDataChange} />

        <label>Price per Day</label>
        <input type="number" name="pricePerDay" value={formData.price} onChange={handleDataChange} />

        <button type="submit">Save changes</button>
      </form>
    </div>
    :
    <div>
      <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="loading-img" width={300}/>
      <p>Loading...</p>
    </div>
  );
}
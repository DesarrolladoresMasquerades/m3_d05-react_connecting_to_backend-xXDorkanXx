import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApartmentCreatePage() {

  const [formData, setFormData] = useState({
      title: "",
      img: "",
      pricePerDay: 0
  });

  const navigate = useNavigate();

  function handleDataChange(event){
    const key = event.target.name;
    const value = event.target.value;

    setFormData(formData=> ({...formData, [key]: value}))
  }

  function handleSubmit(event){
    event.preventDefault();

    axios.post("https://ironbnb-m3.herokuapp.com/apartments", formData)
    .then((response)=>{navigate("/apartments/"+ response.data._id)})
    .catch((error)=>{
        setFormData({
            title: "",
            img: "",
            pricePerDay: 0
        });
        navigate("/apartments/create");
    }) //or useState of error and rerender this form with the error updated
  }

  return (
    <div className="AddApartmentPage">
      <h3>Edit {formData.title}</h3>

      <form onSubmit={handleSubmit}>

        <label>Title</label>
        <input type="text" name="title" value={formData.title} onChange={handleDataChange} />

        <label>Image URL</label>
        <input type="text" name="img" value={formData.img} onChange={handleDataChange} />

        <label>Price per Day</label>
        <input type="number" name="pricePerDay" value={formData.pricePerDay} onChange={handleDataChange} />

        <button type="submit">Save changes</button>
      </form>
    </div>
  );
}
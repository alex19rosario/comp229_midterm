import React, { useState } from "react";

export default function AddShop() {
  const [shop, setshop] = useState({
    name: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setshop((prevshop) => ({ ...prevshop, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!shop.name || !shop.description) {
      alert("Please fill out all fields before submitting the form.");
      return; // Stop further execution of the function
    }
    else{
      alert(
        `Name: ${shop.name}, Description: ${shop.description} `
      );
      // Clear the form fields
      document.getElementById("name").value = "";
      document.getElementById("description").value = "";
    }
    
  };

  const handleCancel = () => {
    // Clear the form fields
    document.getElementById("name").value = "";
      document.getElementById("description").value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      
      <input
      placeholder="Name"
        type="text"
        id="name"
        className="multiple__input"
        name="name"
        value={shop.name}
        onChange={handleChange}
      />

    <input
      placeholder="Description"
        type="text"
        id="description"
        className="multiple__input"
        name="description"
        value={shop.description}
        onChange={handleChange}
      />
      
      <button className="multiple__button" type="submit">
        Submit
      </button>
      <button type="button" className="multiple__button" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}
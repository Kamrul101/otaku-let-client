import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const {
    _id,
    photo,
    name,
    quantity,
    sellerName,
    sellerEmail,
    price,
    rating,
    subCategory,
    details,
  } = toy;
  const handleSingleToy = (id) =>{
    
        fetch(`http://localhost:5000/toys/${id}`)
        .then(res => res.json())
        .then(data=>{
            console.log(data);
        }
            
        )
  }
  return (
    <tr>
      <th>
        <label>
          <button className="btn btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm opacity-50">{}</div>
        </div>
      </td>
      <td>
      <div>
          <div className="font-bold">{sellerName}</div>
          <div className="text-sm opacity-50">{subCategory}</div>
        </div>
        
      </td>
      <td>{'$'+price}</td>
      <td>{quantity}</td>
      <th>
        <button onClick={()=>handleSingleToy(_id)} className="btn btn-info text-white"><Link to='/singleToyDetail'>Details</Link></button>
      </th>
    </tr>
  );
};

export default ToyCard;

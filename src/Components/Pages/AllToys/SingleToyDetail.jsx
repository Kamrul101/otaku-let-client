import React from "react";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import { FaBeer, FaRegStar,FaStar,FaStarHalf  } from 'react-icons/fa';

const SingleToyDetail = ({ params }) => {
  // const {id} = useParams();
  const singleToyDetail = useLoaderData();
  console.log(singleToyDetail);
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
  } = singleToyDetail;

  return (
    <div className="mb-5 md:w-3/4 md:mx-auto mx-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-200 rounded-2xl">
        <div>
          <img className="rounded-2xl" src={photo} alt="" />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold">{name}</h1> <br />
          <h1 className="text-xl md:text-3xl font-semibold text-gray-500">
            Seller: <span className="text-gray-950">{sellerName}</span>
          </h1>{" "}
          <br />
          <h1 className="text-xl md:text-3xl font-semibold text-gray-500">
            Seller Email: <span className="text-gray-950">{sellerEmail}</span>
          </h1>{" "}
          <br />
          <h1 className="text-xl md:text-3xl font-semibold text-gray-500">
            Price: <span className="text-gray-950">${price}</span>
          </h1>{" "}
          <br />
          <h1 className="text-xl md:text-3xl font-semibold text-gray-500">
            Available Quantity:{" "}
            <span className="text-gray-950">{quantity}</span>
          </h1>{" "}
          <br />
          <h1 className="text-xl md:text-3xl font-semibold text-gray-500">
            {/* <span>{rating}</span> */}
            Ratings: 
            <Rating
            className="text-red-600 text-3xl"
              initialRating={rating}
              emptySymbol={
                <FaRegStar></FaRegStar>
              }
              readonly={
                <FaStar></FaStar>
              }
              fullSymbol={
                <FaStar></FaStar>
              }
              
            />
            <span>({rating})</span>
          </h1>{" "}
          <br />
          <h1 className="text-xl md:text-3xl font-semibold text-gray-500">
            Descriptions: <br />{" "}
            <span className="text-gray-950">{details}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetail;

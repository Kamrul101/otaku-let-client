import React, { useEffect, useState } from "react";
import "./ShopByCategory.css";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const ShopByCategory = () => {
  const [addedToy, setAddedToy] = useState([]);
  const [items, setItems] = useState(addedToy);

  const url = `https://toy-store-server-pi.vercel.app/toys`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAddedToy(data);
      });
  }, [url]);
  console.log(addedToy);
  const filterItem = (catItem) => {
    const updatedItems = addedToy.filter((curElem) => {
      return curElem.subCategory === catItem;
    });
    setItems(updatedItems);
  };

  return (
    <div className="w-full md:w-3/4 md:mx-auto my-12 bg-slate-200 rounded-lg py-6">
      <h1 className="text-center text-4xl font-semibold my-6 ">
        Shop By <span className="text-orange-500">Category</span>
      </h1>
      <div className="flex justify-around">
        <button 
          onClick={() => filterItem("One Piece")}
          className="btn md:text-2xl btn-error text-white"
          
        >
          One Piece
        </button>
        <button
          onClick={() => filterItem("Fairy Tail")}
          className="btn md:text-2xl btn-info text-white"
        >
          Fairy Tail
        </button>
        <button
          onClick={() => filterItem("Bleach")}
          className="btn md:text-2xl btn-warning text-white"
        >
          Bleach
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 py-12 px-3 ">
        {items.map((elem) => {
          const { _id, photo, name, price, rating } = elem;
          return (
            <div className="flex shadow-2xl rounded-lg items-center" key={_id}>
              <img className="w-1/2 rounded-md" src={photo} alt="" />
              <div className="ml-4">
                <h1 className="text-xl md:text-3xl font-semibold md:mb-3">{name}</h1>
                <h1 className="text-gray-600 md:text-2xl">Price: <span className="text-red-500">${price}</span></h1>
                <h3 className="my-1 md:my-3">
                  <span className="md:text-2xl text-gray-600">Ratings: </span>
                  <Rating
                    className="text-red-600 md:text-2xl"
                    initialRating={rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    readonly={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                  />
                </h3>
                <button className="btn btn-info text-white">
                  <Link to={`/singleToyDetail/${_id}`}>Details</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopByCategory;

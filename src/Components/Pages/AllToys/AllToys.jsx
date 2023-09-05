import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";

const AllToys = () => {
  // const allToys = useLoaderData();
  const [allToys, setAllToys] = useState([]);
  const [asc, setAsc] = useState(true);
  const searchRef = useRef(null);
    const [search, setSearch] = useState('');

    useEffect(()=>{
      fetch(`https://toy-store-server-pi.vercel.app/toys?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
      .then(res => res.json())
      .then(data=>setAllToys(data));
    },[asc,search])
    const handleSearch = () => {
      console.log(searchRef.current.value);
      setSearch(searchRef.current.value);
  }

  return (
    <div>
      <div className="overflow-x-auto md:w-3/4 mx-auto">
        {/* Search */}
        <div className="form-control mb-4 flex justify-evenly">
          <div className="input-group">
            <input
              type="text"
              ref={searchRef}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button
            onClick={handleSearch}
            className="btn btn-square">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          <button 
          className="btn btn-warning text-white text-xl ml-5 "
          onClick={() => setAsc(!asc)}
          >{asc ? 'Price: High to Low' : 'Price: Low to High'}</button>
          </div>
          
        </div>
        
          
        
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Action Figure Name</th>
              <th>
                Seller/ <br />
                Sub-category
              </th>
              <th>Price</th>
              <th>
                Available <br />
                Quantity
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;

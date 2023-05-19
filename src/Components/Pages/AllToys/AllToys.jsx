import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from './ToyCard';

const AllToys = () => {
    const allToys = useLoaderData();
    
    return (
        <div>
            <div className="overflow-x-auto md:w-3/4 mx-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>
          
        </th>
        <th>Action Figure Name</th>
        <th>Seller/ <br />Sub-category</th>
        <th>Price</th>
        <th>Available <br />Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
                allToys.map(toy => <ToyCard
                key={toy._id}
                toy={toy}
                ></ToyCard>)
            }
    </tbody>
    
  </table>
</div>
            
        </div>
    );
};

export default AllToys;
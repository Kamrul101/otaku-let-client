import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useLoaderData } from "react-router-dom";

const MyToy = ({params}) => {
    const {user} = useContext(AuthContext);
    // const [myToy, setMyToy] = useState([]);
    
    const myToys = useLoaderData();
    console.log(myToys);
  return (
    <div>
      <div className="overflow-x-auto md:w-3/4 mx-auto">
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
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;

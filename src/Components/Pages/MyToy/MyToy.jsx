import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useLoaderData } from "react-router-dom";
import MyToyCard from "./MyToyCard";

const MyToy = () => {
    const {user} = useContext(AuthContext);
    const [addedToy, setAddedToy] = useState([]);

  const url = `http://localhost:5000/toys`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const remaining = data.filter(userToy => userToy.email === user.email);
        setAddedToy(remaining)
      });
    }, [url]);
    console.log(addedToy);
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
          <tbody>
            {
              addedToy.map(userToy => <MyToyCard
              key={userToy._id}
              userToy={userToy}
              ></MyToyCard>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;

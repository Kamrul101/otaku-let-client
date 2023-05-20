import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toy = useLoaderData();
    const {_id} = toy;
    console.log(toy);
    const handleUpdateToy = event =>{
        event.preventDefault();
        const form= event.target;
        
        const quantity = form.quantity.value;
        
        const details = form.details.value;
        const price = form.price.value;
        const updateToy = {quantity,details,price};
        fetch(`https://toy-store-server-pi.vercel.app/toys/${_id}`,{
          method: "PUT",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(updateToy)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'Success',
              text: 'Updated successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })
    }
    return (
        <div className="bg-[#e7e5e4] p-5 rounded-lg w-3/4 mx-auto mb-5">
      <h2 className="text-4xl font-extrabold text-center py-4">
        <span className="text-orange-500">Update ACTION FIGURES</span>
      </h2>
      <form onSubmit={handleUpdateToy}>
        
        {/* Price and quantity row */}
        <div className="md:flex mb-8">
        <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="$price"
                className="input input-bordered w-full"
                name="price"
              />
            </label>
          </div>
          
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="available quantity"
                className="input input-bordered w-full"
                name="quantity"
              />
            </label>
          </div>
        </div>
       {/* detail */}
        <div className=" mb-8">
          
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Details"
                className="input input-bordered w-full"
                name="details"
              />
            </label>
          </div>
        </div>
        <input
          className="btn btn-block btn-info text-white text-xl"
          type="submit"
          value="Update"
        />
      </form>
    </div>
    );
};

export default UpdateToy;
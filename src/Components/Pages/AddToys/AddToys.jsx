import React from "react";
import Swal from "sweetalert2";

const AddToys = () => {
  const handleAddFigure = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const subCategory = form.subCategory.value;
    const details = form.details.value;
    const newToy = {
      photo,
      name,
      quantity,
      sellerName,
      email,
      price,
      rating,
      subCategory,
      details,
    };
    console.log(newToy);
    fetch("https://toy-store-server-pi.vercel.app/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Action figure added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#e7e5e4] p-5 rounded-lg w-3/4 mx-auto mb-5">
      <h2 className="text-4xl font-extrabold text-center py-4">
        <span className="text-orange-500">ADD ACTION FIGURES</span>
      </h2>
      <form onSubmit={handleAddFigure}>
        <div className="mb-8">
          {/* photo url */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo Url of Toy </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Photo url"
                className="input input-bordered w-full"
                name="photo"
                required
              />
            </label>
          </div>
        </div>
        {/* name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Toy name"
                className="input input-bordered w-full"
                name="name"
                required
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
        {/* seller name and email */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Seller name"
                className="input input-bordered w-full"
                name="sellerName"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                placeholder="e.g you@email.com"
                className="input input-bordered w-full"
                name="email"
              />
            </label>
          </div>
        </div>
        {/* price and ratings */}
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
              <span className="label-text">Ratings</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="ratings"
                className="input input-bordered w-full"
                name="rating"
              />
            </label>
          </div>
        </div>
        {/* sub category and details */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Sub-Category"
                className="input input-bordered w-full"
                name="subCategory"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
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
          className="btn btn-block btn-error text-white text-xl"
          type="submit"
          value="ADD ACTION FIGURE"
        />
      </form>
    </div>
  );
};

export default AddToys;

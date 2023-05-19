import React from "react";
import './Gallery.css'
import img1 from "../../../../assets/One Piece/marco-one-piece.jpg";
import img2 from "../../../../assets/One Piece/monkey-d-luffy-one-piece.jpg";
import img3 from "../../../../assets/One Piece/vinsmoke-reiju.jpg";
import img4 from "../../../../assets/Bleach/ichigo-kurosaki-bleach.jpg";
import img5 from "../../../../assets/Bleach/Zaraki-kenpachi-bleach.jpg";
import img6 from "../../../../assets/Bleach/toshiro-hitsugaya-bleach.jpg";

const Gallery = () => {
  return (
    <div className="my-12 bg-[#ecfeff] md:w-3/4 mx-auto p-4 rounded-lg gallery">
        <h1 className="text-center text-4xl font-bold my-6">Some <span className="text-orange-500">Collections</span> of Our</h1>
        <div className="grid grid-cols-2 md:grid-cols-3  gap-3">
      <div>
        <img className="rounded-lg shadow-xl" src={img1} alt="" />
      </div>
      <div>
        <img className="rounded-lg shadow-xl" src={img3} alt="" />
      </div>
      <div>
        <img className="rounded-lg shadow-xl" src={img4} alt="" />
      </div>
      <div>
        <img className="rounded-lg shadow-xl" src={img5} alt="" />
      </div>
      <div>
        <img className="rounded-lg shadow-xl" src={img2} alt="" />
      </div>
      <div>
        <img className="rounded-lg shadow-xl" src={img6} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Gallery;

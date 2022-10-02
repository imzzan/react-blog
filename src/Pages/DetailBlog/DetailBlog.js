import React from "react";
import { Link } from "react-router-dom";
import { gambar3 } from "../../Asset";

const DetailBlog = () => {
  return (
    <div>
      <div className=" md:w-1/2 w-[100%] mx-auto shadow-2xl p-5">
        <img
          src={gambar3}
          alt="www"
          className=" md:mt-5 mt-2 h-[300px] w-[100%] object-cover"
        />
        <p className=" font-bold text-xl mt-2">Judul</p>
        <p className=" text-sm text-gray-500">Date - Author</p>
        <p className="mt-3 md:text-lg text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          voluptatem delectus distinctio vitae similique, dignissimos unde
          veritatis tempora blanditiis dolore.
        </p>
      </div>
      <Link to='/home'><p className=" text-center text-sm text-gray-500 underline mt-10">Bact To Home</p></Link>
    </div>
  );
};
export default DetailBlog;

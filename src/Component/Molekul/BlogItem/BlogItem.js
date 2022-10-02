import React from "react";
import { gambar1 } from "../../../Asset";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div className=" w-[400px] h-auto m-5 p-5 shadow-2xl">
      <img src={gambar1} alt="" />
      <div>
        <p className=" font-bold text-xl">Title</p>
        <p className=" text-sm text-gray-500">Date - Author</p>
        <p className=" text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          iusto quaerat minima! Rerum voluptate ut id iste sunt eligendi
          consequatur?
        </p>
      </div>
      <Link to='/home/detailblog'><button className=" bg-blue-600 block mx-auto p-2 text-white rounded-lg mt-2">Detail</button></Link>
    </div>
  );
};

export default BlogItem;

import React from "react";
import { Belajar, Bintang } from "../../../Asset";
import { Button, Gap } from "../../Atoms";
import { Link } from "react-router-dom";

const HalamanDepan = () => {
  return (
    <div>
      <div className=" flex md:flex-row flex-col justify-center items-center md:w-3/4 md:ml-20 md:mt-20 mt-5 w-full">
        <div className=" md:w-[800px] w-[200px] mr-5">
          <img src={Bintang} alt="jjj" className=" rounded-xl"/>
        </div>
        <div className=" mx-5">
          <h1 className=" text-xl font-bold">My Blog...</h1>
          <p className=" text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            explicabo quam vero, corrupti cum eos iure magnam eius, provident
            saepe dolores blanditiis tempore pariatur inventore quisquam
            laudantium? Aut quisquam corporis, expedita facilis eligendi non
            accusantium id cum totam illo quibusdam animi maiores tempore neque
            reprehenderit! Doloremque et corporis quas eos.
          </p>
        </div>
      </div>
      <div className=" flex md:flex-row flex-col justify-center items-center md:w-3/4 md:ml-20 md:mt-20 mt-5 w-full">
        <div className=" mx-5">
          <h1 className=" text-xl font-bold">My Blog...</h1>
          <p className=" text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            explicabo quam vero, corrupti cum eos iure magnam eius, provident
            saepe dolores blanditiis tempore pariatur inventore quisquam
            laudantium? Aut quisquam corporis, expedita facilis eligendi non
            accusantium id cum totam illo quibusdam animi maiores tempore neque
            reprehenderit! Doloremque et corporis quas eos.
          </p>
        </div>
        <div className=" md:w-[800px] w-[200px] mr-5">
          <img src={Belajar} alt="jjj" className=" rounded-xl"/>
        </div>
      </div>
      <div>
        <h1 className=' text-xl font-bold text-center'>Let's Try It</h1>
        <Gap height={10}/>
        <Link to='register'><Button title='Buat Sekarang'/></Link>
        <Gap height={20}/>
      </div>
    </div>
  );
};

export default HalamanDepan;

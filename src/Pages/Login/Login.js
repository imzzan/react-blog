import React from "react";
import {BiLogInCircle} from 'react-icons/bi';
import { Input, Gap, Button } from "../../Component/Atoms";
import { Bangunan } from "../../Asset";

const LoginPage = () => {
  return (
      <div className=" flex w-screen">
          <div className=" md:w-[40%] w-[100%] h-screen md:p-16 md:mt-0 pt-[40%] p-16 bg-blue-300">
          <p className=" font-bold text-center">Login <BiLogInCircle className=" inline"/></p>
          <Gap height={10}/>
          <Input label='NamaLengkap' labelValue='Nama Lengkap' id='NamaLengkap' placeholder='Nama Lengkap'/>
          <Gap height={20}/>
          <Input label='password' labelValue='Password' id='password' placeholder='Password' type='password'/>
          <Gap height={20}/>
          <Button title='Login'/>
        </div>
        <div className=" flex-1 w-[60%]">
          <img
            src={Bangunan}
            alt="sssss"
            className="w-[100%] h-screen md:block hidden"
          />
        </div>
      </div>
  );
};

export default LoginPage;

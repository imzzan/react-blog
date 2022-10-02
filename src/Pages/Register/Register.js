import React, {useState} from "react";
import {FaSignInAlt} from 'react-icons/fa';
import { Input, Gap, Button } from "../../Component/Atoms";
import { Pesawat } from "../../Asset";
import { Link } from "react-router-dom";
import  Axios  from 'axios';

const Register = () => {

  const [nama_akun, setNama_akun] = useState('');
  const [no_telepon, setNo_telepon] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const onSubmit = () => {
    const data = new FormData();
    data.append('nama_akun', nama_akun);
    data.append('no_telepon', no_telepon);
    data.append('email', email);
    data.append('password', password);

    Axios.post('http://localhost:3001/reg/register', data, {
      headers : {
        'content-type' : ''
      }
    })
    .then(res => {
      console.log('Success', res);
    })
    .catch(err => {
      console.log(err);
    })

  }


  return (
      <div className=" flex w-screen">
        <div className=" flex-1 w-[60%]">
          <img
            src={Pesawat}
            alt="sssss"
            className="w-[100%] h-screen md:block hidden"
          />
        </div>
        <div className=" md:w-[40%] w-[100%] h-screen md:p-16 md:mt-0 pt-[40%] p-16 bg-blue-300">
          <p className=" font-bold text-center">Register <FaSignInAlt className=" inline"/></p>
          <Gap height={10}/>
          <Input label='NamaLengkap' value={nama_akun} onChange={(e) => setNama_akun(e.target.value)} labelValue='Nama Lengkap' id='NamaLengkap' placeholder='Nama Lengkap'/>
          <Gap height={20}/>
          <Input label='number' value={no_telepon} onChange={(e) => setNo_telepon(e.target.value)} labelValue='No Telepon' id='number' placeholder='No Telepon' type='text'/>
          <Gap height={20}/>
          <Input label='email' value={email} onChange={(e) => setEmail(e.target.value)} labelValue='Email' id='email' placeholder='Email' type='email'/>
          <Gap height={20}/>
          <Input label='password' value={password} onChange={(e) => setPassword(e.target.value)} labelValue='Password' id='password' placeholder='Password' type='password'/>
          <Gap height={20}/>
          <Button title='Register' onClick={onSubmit}/>
          <Link to='/'><p className=" text-center mt-10 underline text-gray-500 cursor-pointer text-sm">Sudah Punya Akun? Klik LogIn</p></Link>
        </div>
      </div>
  );
};

export default Register;

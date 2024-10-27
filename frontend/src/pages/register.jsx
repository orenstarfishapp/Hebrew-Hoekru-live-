import { Input } from "antd";
import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/user";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = async ()=>{
    if (username.length < 2) {
      setMessage("Username must be at least 2 characters long");
      setTimeout(()=>{
       setMessage('')
      },2000)
      return;
    }
    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address");
      setTimeout(()=>{
        setMessage('')
       },2000)
      return;
    }
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      setTimeout(()=>{
        setMessage('')
       },2000)
      return;
    }
    try{
      const res = await  axios.post("/api/auth/register", { username, email, password });
      alert('Registration successful')
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
      setUser(res.data?.user)
      navigate("/lessons");  
    } catch (err) {
      alert(err?.response?.data ?? "Registration failed")
    }
  }
  return (
      <div className="w-full bg-blue-100 flex justify-center py-16">
        <div className="bg-white p-6 rounded-2xl max-w-md">
          <div className="text-black text-center text-[30px] px-4 font-bold">
            Register
          </div>
          <div>
            <Input placeholder="Username" className="w-full pl-4 py-2 border border-gray-200 rounded-xl mt-4" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <Input placeholder="Email" className="w-full pl-4 py-2 border border-gray-200 rounded-xl mt-4" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Input.Password placeholder="Password" className="w-full pl-4 py-2 border border-gray-200 rounded-xl mt-4" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <div className="bg-[#3B82F6] w-full mt-6 rounded-xl text-white text-[18px] text-center py-3 font-bold cursor-pointer hover:bg-[#2563EB]" onClick={handleSubmit}>
              Register
            </div>
            <p className=" mt-2 text-amber-700">{message}</p>
          </div>
        </div>
      </div>
  );
};

export default Register;

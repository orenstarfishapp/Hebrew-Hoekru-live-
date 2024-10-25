import { Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post("api/auth/login", { email, password });
      alert('Login successful');
      console.log(res.data.token); // Token from the server
      localStorage.setItem("token", res.data.token);
      navigate("/lessons");
    } catch (err) {
      alert(err?.response?.data ?? 'Invalid login credentials');
    }
  };
  return (
    <div className="w-full bg-blue-100 flex justify-center py-16">
      <div className="bg-white p-6 rounded-2xl max-w-md">
        <div className="text-black text-center text-[30px] px-4 font-bold">
          Login
        </div>
        <div>
          <Input placeholder="Email" className="w-full pl-4 py-2 border border-gray-200 rounded-xl mt-4" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <Input.Password placeholder="Password" className="w-full pl-4 py-2 border border-gray-200 rounded-xl mt-4" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <div className="bg-[#3B82F6] w-full mt-6 rounded-xl text-white text-[18px] text-center py-3 font-bold cursor-pointer hover:bg-[#2563EB]" onClick={handleSubmit}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

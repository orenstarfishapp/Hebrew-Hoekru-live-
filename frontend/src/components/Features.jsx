import { Input } from "antd";
import React from "react";

const EmailForm = () => {
  return (
    <div className="w-full bg-blue-100 flex justify-center py-16">
      <div className="bg-white p-6 rounded-2xl max-w-md">
        <div className="text-black text-center text-[30px] px-4 font-bold">
          Start Your Free Trial
        </div>
        <div>
          <Input placeholder="Your Name" className="w-full pl-4 py-2 border border-gray-200 rounded-xl mt-4" />
          <Input placeholder="Your Email" className="w-full pl-4 py-2 border border-gray-200 rounded-xl mt-4" />
          <Input placeholder="Your Phone Number" className="w-full pl-4 py-2 border border-gray-200 rounded-xl mt-4" />
          <div className="bg-[#3B82F6] w-full mt-6 rounded-xl text-white text-[18px] text-center py-3 font-bold cursor-pointer hover:bg-[#2563EB]">
              Get Started
            </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;

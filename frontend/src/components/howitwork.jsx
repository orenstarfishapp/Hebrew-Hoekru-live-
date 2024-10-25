import React from "react";
import { FileTextOutlined, UserOutlined, AreaChartOutlined ,TeamOutlined } from '@ant-design/icons';

const HowitWork = () => {
  return (
    <div className="w-full py-[50px] bg-blue-100">
      <div className="mx-auto w-4/5">
        <div className="text-center text-[30px] font-bold mb-[40px]">
          How It Works
        </div>
        <div className="flex justify-around">
          <div className="w-1/5">
            <div className="flex justify-center mb-4">
              <UserOutlined className="text-[70px]" style={{ color: "rgba(59, 130, 246)" }} />
            </div>
            <div className="text-center font-bold">
              Sign Up
            </div>
            <div className="text-center">
              Register for your free trial
            </div>
          </div>
          <div className="w-1/5">
            <div className="flex justify-center mb-4">
              <FileTextOutlined className="text-[70px]" style={{ color: "rgba(59, 130, 246)" }} />
            </div>
            <div className="text-center font-bold">
              Assessment
            </div>
            <div className="text-center">
              Take a placement test
            </div>
          </div>
          <div className="w-1/5">
            <div className="flex justify-center mb-4">
              <TeamOutlined className="text-[70px]" style={{ color: "rgba(59, 130, 246)" }} />
            </div>
            <div className="text-center font-bold">
              Learn
            </div>
            <div className="text-center">
              Attend live classes and practice
            </div>
          </div>
          <div className="w-1/5">
            <div className="flex justify-center mb-4">
              <AreaChartOutlined  className="text-[70px]" style={{ color: "rgba(59, 130, 246)" }} />
            </div>
            <div className="text-center font-bold">
              Progress
            </div>
            <div className="text-center">
              Track your improvement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWork;
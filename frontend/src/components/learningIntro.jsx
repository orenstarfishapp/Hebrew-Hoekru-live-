import React from "react";
import { VideoCameraFilled, UserOutlined, LaptopOutlined } from '@ant-design/icons';

const LearningIntro = () => {
  return (
    <div className="mx-auto w-4/5 py-[50px]">
      <div className="text-center text-[30px] font-bold mb-[40px]">
        Why Learn with Us?
      </div>
      <div className="flex justify-around">
        <div className="w-1/5">
          <div className="flex justify-center mb-4">
          <VideoCameraFilled className="text-[70px]" style={{color:"rgba(59, 130, 246)"}}/>
          </div>
          <div className="text-center font-bold">
            Live Online Classes
          </div>
          <div className="text-center">
            Interactive sessions with real-time feedback
          </div>
        </div>
        <div className="w-1/5">
          <div className="flex justify-center mb-4">
          <UserOutlined className="text-[70px]" style={{color:"rgba(59, 130, 246)"}}/>
          </div>
          <div className="text-center font-bold">
          Native Hebrew Speakers
          </div>
          <div className="text-center">
          Learn from experienced teachers
          </div>
        </div>
        <div className="w-1/5">
          <div className="flex justify-center mb-4">
          <LaptopOutlined className="text-[70px]" style={{color:"rgba(59, 130, 246)"}}/>
          </div>
          <div className="text-center font-bold">
          Interactive Methods
          </div>
          <div className="text-center">
          Engaging activities to accelerate learning
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningIntro;
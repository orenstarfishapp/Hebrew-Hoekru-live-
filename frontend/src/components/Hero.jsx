import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center bg-[#00000080]">
        <div className="max-w-3xl py-[250px]">
          <div className="text-white text-[60px]">
            <div className="text-center" style={{textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
              Master Hebrew in Months,
            </div>
            <div className="text-center" style={{textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
              Not Years
            </div>
          </div>
          <div className="text-white text-[23px] mt-[20px]">
            <div className="text-center" style={{textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
              Join our immersive online Hebrew learning program and speak with
            </div>
            <div className="text-center" style={{textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
              confidence!
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="bg-[#FBBF24] w-[260px] rounded-3xl text-[#1E3A8A] text-[16px] text-center px-6 py-3 font-bold cursor-pointer hover:bg-[#FCD34D]">
              Start Your 30-Day Free Trial
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#3B82F6]">
        <div className="max-w-3xl py-[60px]">
          <div className="text-white text-[30px] mb-4">
            <div className="text-center font-bold">
              Start Your 30-Day Free Trial Today!
            </div>
          </div>
          <div className="text-white text-[20px] mt-[4px]">
            <div className="text-center">
              Experience our premium Hebrew learning platform at no cost for a full month.
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="bg-[#FBBF24] w-[180px] rounded-3xl text-[#1E3A8A] text-[16px] text-center px-6 py-3 font-bold cursor-pointer hover:bg-[#FCD34D]">
              Join Free Trial
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

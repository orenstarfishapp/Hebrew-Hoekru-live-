import { Input } from "antd";
import React from "react";

const ReadyJourney = () => {
  return (
    <div className="flex justify-center bg-[#3B82F6]">
        <div className="max-w-3xl py-[60px]">
          <div className="text-white text-[30px]">
            <div className="text-center">
            Ready to Start Your Hebrew Journey?
            </div>
          </div>
          <div className="text-white text-[20px] mt-[4px]">
            <div className="text-center">
            Join thousands of successful learners and begin your path to Hebrew fluency today!
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="bg-[#FBBF24] w-[300px] rounded-3xl text-[#1E3A8A] text-[16px] text-center px-6 py-3 font-bold cursor-pointer hover:bg-[#FCD34D]">
              Start Your 30-Day Free Trial Now
            </div>
          </div>
        </div>
      </div>
  );
};

export default ReadyJourney;

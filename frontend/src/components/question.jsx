import { Link } from 'react-router-dom';

const Question = () => {
  return (
    <>
      <div className='max-w-[750px] mx-auto py-20'>
        <div className='text-center text-[30px] font-bold'>
          Frequently Asked Questions
        </div>
        <div className='shadow-2xl py-6 px-6 my-8 rounded-lg'>
          <div className='font-bold my-2 text-[20px]'>How long does it take to become fluent in Hebrew?</div>
          <div>
            With our intensive program, most students achieve conversational fluency within 6-12 months, depending on their dedication and prior language learning experience.
          </div>
        </div>
        <div className='shadow-2xl py-6 px-6 my-8 rounded-lg'>
          <div className='font-bold my-2 text-[20px]'>Do I need any prior knowledge of Hebrew to start?</div>
          <div>
            Not at all! Our beginner course is designed for absolute beginners. We'll start with the basics and guide you every step of the way.
          </div>
        </div>
        <div className='shadow-2xl py-6 px-6 my-8 rounded-lg'>
          <div className='font-bold my-2 text-[20px]'>How are the online classes conducted?</div>
          <div>
            Our live online classes are held via video conferencing. You'll interact with your teacher and classmates in real-time, participate in discussions, and receive immediate feedback.
          </div>
        </div>
        <div className='shadow-2xl py-6 px-6 my-812 rounded-lg'>
          <div className='font-bold my-2 text-[20px]'>Can I switch between plans?</div>
          <div>
            Yes, you can upgrade or downgrade your plan at any time. The changes will be reflected in your next billing cycle.
          </div>
        </div>
        <div className='shadow-2xl py-6 px-6 my-8 rounded-lg'>
          <div className='font-bold my-2 text-[20px]'>Is there a money-back guarantee?</div>
          <div>
            Yes, we offer a 30-day money-back guarantee if you're not satisfied with our program for any reason.
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;

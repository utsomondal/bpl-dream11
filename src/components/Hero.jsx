import hero from "../assets/LOGO.png";
import { ToastContainer } from 'react-toastify';

const Hero = ({ handleCreditBtn }) => {
  return (
    <section className="bg-radial from-white to-blue-400 flex flex-col items-center justify-center text-center p-10 mt-10 rounded-md">
      <img src={hero} alt="hero icon" />
      <div className="space-y-1 my-5">
        <h1 className="text-4xl font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-2xl font-semibold text-gray-700">
          Beyond Boundaries Beyond Limits
        </p>
      </div>
      <div className="border-2 border-blue-500 py-2 px-2 rounded-full">
        <button
          onClick={() => handleCreditBtn()}
          className="rounded-full py-2 px-4 bg-blue-500 text-white text-xl font-bold cursor-pointer hover:bg-blue-600 active:scale-90 transition-all duration-200"
        >
          Claim Free Credit
        </button>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Hero;

import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex rounded-[1.7rem] bg-n-8/80 items-center px-6 h-[3.5rem] z-10 ${
        className || ""
      } text-base}`}
    >
      <img src={loading} className="w-5 h-5 mr-4" alt="loading" />
      AI is generating
    </div>
  );
};

export default Generating;

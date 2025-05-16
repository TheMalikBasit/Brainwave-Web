import { loading } from "../assets";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Generating = ({ className }) => {
  const loadingRef = useRef(null);

  const rotationHandler = () => {
    gsap.to(loadingRef.current, {
      rotate: 360,
      duration: 2,
      onComplete: () => gsap.set(loadingRef.current, { rotate: 0 }), // reset rotation
    });
  };

  // Optional: register GSAP plugin
  useGSAP(() => {
    // Initial setup if needed
    gsap.set(loadingRef.current, { rotate: 0 });
  }, []);

  return (
    <div
      className={`flex rounded-[1.7rem] bg-n-8/80 items-center px-6 h-[3.5rem] z-10 ${
        className || ""
      } text-base`}
    >
      <img
        ref={loadingRef}
        src={loading}
        className="w-5 h-5 mr-4"
        alt="loading"
      />

      <input
        onClick={rotationHandler}
        className="bg-transparent w-full focus:outline-none focus:border-none"
        type="text"
        placeholder="AI is generating"
      />
    </div>
  );
};

export default Generating;

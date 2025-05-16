import Section from "./Section";
import { stars, smallSphere } from "../assets";
import Heading from "./Heading";
import PaymentLists from "./PaymentLists";
import { LeftLine, RightLine } from "./design/Pricing";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Payment = () => {
  useGSAP(() => {
    gsap.to("#Sphere", {
      rotate: 360,
      duration: 2,
      scrollTrigger: {
        trigger: "#Sphere",
        start: "top 50%",
        toggleActions: "restart none restart none",
      },
    });
  });

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            id="Sphere"
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PaymentLists />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Payment;

import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices } from "../constants";
import Generating from "./Generating";
const Advantages = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative flex items-center border border-n-1/10 z-1 h-[39rem] mb-5 p-8 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                src={service1}
                width={800}
                height={730}
                alt="smartest-AI"
              />
            </div>
            <div className="relative ml-auto max-w-[17rem] z-1">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 text-n-3 mb-[3rem]">
                Brainwave unlocks the potential of AI-powered applications
              </p>

              <ul>
                {brainwaveServices.map((item, index) => (
                  <li
                    className="flex items-start py-4 border-t border-n-6"
                    key={index}
                  >
                    <img
                      className="mr-5"
                      src={check}
                      width={24}
                      height={24}
                      alt=""
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute border left-4 bottom-4 right-4 lg:bottom-8 lg:left-1/2 backdrop-blur border-n-1/10 lg:-translate-x-1/2" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Advantages;

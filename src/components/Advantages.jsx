import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
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

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[45rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="w-full h-full object-cover"
                  src={service2}
                  width={630}
                  height={750}
                  alt="Smart AI 2"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 text-n-3 mb-[3rem]">
                  Automatically enhance your photos using our AI app's photo
                  editing feature. Try it now!
                </p>
                <PhotoChatMessage />
              </div>
            </div>
            <div className="p-4 min-h-[46rem] bg-n-7 rounded-3xl overflow-hidden">
              <div className="py-12 px-4 xl:px-8 ">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 text-n-3 mb-[2rem]">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img
                          className=""
                          src={item}
                          width={30}
                          height={30}
                          alt=""
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  className="w-full h-full object-cover"
                  src={service3}
                  width={630}
                  height={750}
                  alt="Smart AI 3"
                />
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Advantages;

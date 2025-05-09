import Section from "./Section";
import { BottomLine } from "./design/Hero";
const Collaboration = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPadding
      id="#Collaboration"
    >
      <div className="relative container z-2">
        <div className="flex flex-row justify-between">
          <p>AI Chat App for seamless collaboration</p>
          <p>
            With smart automation and top-notch security, it's the perfect
            solution for teams looking to work smarter.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;

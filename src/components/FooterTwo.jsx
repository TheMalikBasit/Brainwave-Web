import Section from "./Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooterTwo = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex justify-center sm:justify-between items-center gap-10 max-sm:flex-col">
        <a
          className="text-gray font-semibold text-xs flex items-center my-2"
          href="https://github.com/TheMalikBasit"
          target="_blank"
        >
          <FontAwesomeIcon className="mr-5" icon={faGithub} size="2x" />
          github.com/TheMalikBasit
        </a>
        <a
          className="text-gray font-semibold text-xs flex items-center my-2"
          href="https://www.linkedin.com/in/malik-abdul-basit-24b634267/"
          target="_blank"
        >
          <FontAwesomeIcon className="mr-5" icon={faLinkedin} size="2x" />
          linkedin.com/in/malik-abdul-basit
        </a>
      </div>
    </Section>
  );
};

export default FooterTwo;

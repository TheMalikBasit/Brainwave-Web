import { socials } from "../constants";
import Section from "./Section";

const FooterOne = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex justify-center sm:justify-between items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved
        </p>
        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a
              className="flex items-center justify-center w-10 h-10 rounded-full bg-n-7 transition-colors hover:bg-n-6"
              key={item.id}
              href={item.url}
              target="_blank"
            >
              <img src={item.iconUrl} width={15} height={15} alt="" />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default FooterOne;

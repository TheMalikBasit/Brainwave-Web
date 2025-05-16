import TagLine from "./Tagline";
const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 md:text-center lg:mb-20`}
    >
      {tag && <TagLine className="mb-4 md:justify-center" children={tag} />}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 text-n-4 mt-4">{text}</p>}
    </div>
  );
};

export default Heading;

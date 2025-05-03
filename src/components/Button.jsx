import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onclick, children, px, white }) => {
  const classes = `button h-11 relative inline-flex items-center justtify-center transition-colors 
  hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${
    className || ""
  }`;

  const spanClasses = ``;

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;

import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";
const PaymentLists = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap items-center">
      {pricing.map((item, index) => (
        <div
          key={item.id}
          className={`border border-n-6 h-full rounded-[2rem] w-[19rem] max-lg:w-full lg:w-auto px-6 even:py-14 odd:py-8 bg-n-8 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 `}
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>{" "}
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="mb-4 w-full"
            href={item.price ? "/pricing" : "mailto:probasit03@gmail.com"}
            white={!!item.price}
          >
            {item.price ? "Get Started" : "Contact Us"}
          </Button>
          <ul>
            {item.features.map((item, index) => (
              <li
                className="border-t border-n-6 py-5 flex items-start"
                key={index}
              >
                <img
                  className="mr-4"
                  src={check}
                  width={24}
                  height={24}
                  alt="check"
                />
                <p className="body-2">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PaymentLists;

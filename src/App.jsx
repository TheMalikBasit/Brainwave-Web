import ButtonGradient from "./assets/svg/ButtonGradient";
import Advantages from "./components/Advantages";
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Collaboration from "./components/Collaboration";
import Functionalities from "./components/Functionalities";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Payment from "./components/Payment";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Advantages />
        <Payment />
        <Functionalities />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;

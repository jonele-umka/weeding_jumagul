import { useEffect } from "react";
import "./18n";
import "./App.css";
import Content from "./components/Content/Content";
import Main from "./components/Main/Main";
import SliderNames from "./components/Slider/SliderNames/SliderNames";
import SliderNamesLeft from "./components/Slider/SliderNamesLeft/SliderNamesLeft";
import Address from "./components/Address/Address";
import { Timing } from "./components/Timing/Timing";
import Slider from "./components/Slider/Slider";
import { Dresscode } from "./components/Dresscode/Dresscode";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Calendar from "./components/Calendar/Calendar";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <SliderNames />
      <Content />
      <Slider />
      <Calendar/>
      {/* <SliderNamesLeft /> */}
      {/* <Timing /> */}
      {/* <SliderNames /> */}
      {/* <Dresscode /> */}
      {/* <SliderNamesLeft />
      <Address />
      <SliderNames /> */}
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import divider from "./images/pattern-divider-mobile.svg";
import dice from "./images/icon-dice.svg";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((slip) => {
        setAdvice(slip.slip);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFetchButton = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((slip) => {
        setAdvice(slip.slip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-screen h-screen mx-auto relative bg-DarkBlue">
      <div className="w-72 h-fit mx-auto absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-DarkGrayishBlue py-8 px-5 rounded-lg shadow-lg">
        <p className="text-NeonGreen uppercase text-xs text-center pt-1 mb-5">
          Advice #{advice.id}
        </p>

        <h2 className="text-gray-100 text-center ">"{advice.advice}"</h2>

        <img src={divider} alt="" className="py-5" />

        <button className="bg-NeonGreen w-10 h-10 absolute -bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full">
          <img onClick={handleFetchButton} src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;

import Container from "./Container";
import MainCard from "./MainCard";

import { useEffect, useState } from "react";
import "./index.css";
import data from "../data.json";

const App = () => {
  const [time, setTime] = useState(data);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch("../data.json");
  //   const response = await data.json();
  //   setTime(response);
  // };

  return (
    <main className="main">
      <MainCard data={time} />
      <Container data={time} />
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/LynxQuas">
          La Pyae Hmue Aung (zen){" "}
        </a>
        .
      </div>
    </main>
  );
};

export default App;

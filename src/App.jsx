import Container from "./Container";
import MainCard from "./MainCard";

import { useEffect, useState } from "react";
import "./index.css";

const App = () => {
  const [time, setTime] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("../data.json");
    const response = await data.json();
    setTime(response);
  };

  return (
    <main className="main">
      <MainCard data={time} />
      <Container data={time} />
    </main>
  );
};

export default App;

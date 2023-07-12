import MainCard from "./MainCard";
import SideCard from "./SideCard";

import "./container.css";
const Container = (props) => {
  return (
    <div className="container">
      {props.data.map((item) => {
        return <SideCard title={item.title} timeframe={item.timeframes} />;
      })}
    </div>
  );
};

export default Container;

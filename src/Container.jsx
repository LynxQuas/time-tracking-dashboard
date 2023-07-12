import SideCard from "./SideCard";

import "./container.css";
const Container = (props) => {
  return (
    <div className="container">
      {props.data.map((item) => {
        return (
          <SideCard
            title={item.title}
            timeframe={item.timeframes}
            key={item.title}
          />
        );
      })}
    </div>
  );
};

export default Container;

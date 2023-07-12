import SideCard from "./SideCard";

import "./container.css";
const Container = (props) => {
  console.log(props.cata);
  return (
    <div className="container">
      {props.data.map((item) => {
        return (
          <SideCard
            title={item.title}
            timeframe={item.timeframes}
            key={item.title}
            data={props.cata}
          />
        );
      })}
    </div>
  );
};

export default Container;

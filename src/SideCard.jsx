import "./sidecard.css";

const SideCard = (props) => {
  const data = props.data;
  console.log(props.data);
  return (
    <div className="sidecard__container">
      <div className={`sidecard ${props.title}`}>
        <img
          src={`/icon-${props.title}.svg`}
          alt="icon"
          className="work__logo"
        />
      </div>
      <div className="sidecard__lower">
        <div className="header__container">
          <span>{props.title}</span>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="text__container">
          <p className="hours">{props.timeframe[data].current}hrs</p>
          <p className="text">
            last{" "}
            {data === "daily" ? data.slice(0, -3) + "y" : data.slice(0, -2)} -{" "}
            {props.timeframe[data].previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideCard;

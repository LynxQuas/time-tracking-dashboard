import "./sidecard.css";

const SideCard = (props) => {
  return (
    <div className="sidecard__container">
      <div className={`sidecard ${props.title}`}>
        <img
          src={`../public/assets/icon-${props.title}.png`}
          alt=""
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
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div className="text__container">
          <p className="hours">{props.timeframe.weekly.current}hrs</p>
          <p className="text">
            last week - {props.timeframe.weekly.previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideCard;

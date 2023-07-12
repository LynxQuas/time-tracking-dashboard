import "./sidecard.css";

const SideCard = () => {
  return (
    <div className="sidecard__container">
      <div className="sidecard">
        <img src="../images/icon-work.svg" alt="" className="work__logo" />
      </div>
      <div className="sidecard__lower">
        <div className="header__container">
          <span>Work</span>
          <img src="../images/icon-ellipsis.svg" alt="" />
        </div>
        <div className="text__container">
          <p className="hours">32hrs</p>
          <p className="text">last week - 36hrs</p>
        </div>
      </div>
    </div>
  );
};

export default SideCard;

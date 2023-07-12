import "./maincard.css";

const MainCard = () => {
  return (
    <div className="maincard__container">
      <div className="maincard">
        <div className="img__container">
          <img src="./assets/image-jeremy.png" className="image" />
        </div>

        <div className="user__info">
          <p>report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>

      <div className="maincard__lower">
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
};

export default MainCard;

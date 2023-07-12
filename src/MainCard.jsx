import "./maincard.css";

const MainCard = (props) => {
  const clickHandler = (e) => {
    props.click(e.target.textContent);
  };

  return (
    <div className="maincard__container">
      <div className="maincard">
        <div className="img__container">
          <img src="./image-jeremy.png" className="image" />
        </div>

        <div className="user__info">
          <p>report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>

      <div className="maincard__lower" onClick={clickHandler}>
        <p>daily</p>
        <p>weekly</p>
        <p>monthly</p>
      </div>
    </div>
  );
};

export default MainCard;

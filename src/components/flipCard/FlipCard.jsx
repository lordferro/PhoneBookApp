import { useNavigate } from "react-router-dom";

function FlipCard({ card }) {
  const navigation = useNavigate()
  const handleClick = () => {
    navigation(card.path);
  };
  return (
    <div className="flip-card-outer" >
      <div
        className='flip-card-inner hover-trigger'
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.front}</p>
          </div>
        </div>
        <div className="card back" onClick={handleClick}>
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-4 fw-bold">{card.back}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;

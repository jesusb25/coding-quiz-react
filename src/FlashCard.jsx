import "./FlashCard.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function FlashCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped); // toggle flip
  };

  useEffect(() => {
    setIsFlipped(false);
  }, [props]);

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={flipCard}>
      <div className="front">
        <h3>{props.question}</h3>
        <ul>
          <li>{props.optionOne}</li>
          <li>{props.optionTwo}</li>
          <li>{props.optionThree}</li>
        </ul>
        <p>Click to flip</p>
      </div>
      <div className="back">
        <h3>{props.answer}</h3>
      </div>
    </div>
  );
}

FlashCard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  optionOne: PropTypes.string.isRequired,
  optionTwo: PropTypes.string.isRequired,
  optionThree: PropTypes.string.isRequired,
};

export default FlashCard;

import "./Form.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

function Form(props) {
  const [guess, setGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    checkAnswer();
  };

  const checkAnswer = () => {
    if (guess && guess[0].toLowerCase() === props.answer[0].toLowerCase()) {
      alert("You are correct!");
    } else {
      setGuess("");

      alert("You are wrong!");
    }
  };

  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  useEffect(() => {
    setGuess(""); // Clear the form field
  }, [props]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Guess the Answer (e.g. &apos;a&apos; or &apos;b&apos;):
        <input
          className="guess"
          type="text"
          name="name"
          onChange={handleChange}
          value={guess}
        />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;

Form.propTypes = {
  answer: PropTypes.string.isRequired, // Ensure 'answer' is a required string
};

import "./App.css";
import FlashCard from "./FlashCard";
import { useState } from "react";
import Form from "./Form";

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    if (currentCardIndex === flashCardData.length - 1) {
      return;
    }
    const nextIndex = currentCardIndex + 1;
    setCurrentCardIndex(nextIndex);
  };

  const prevCard = () => {
    if (currentCardIndex === 0) {
      return;
    }
    const prevIndex = currentCardIndex - 1;
    setCurrentCardIndex(prevIndex);
  };

  const currentCard = flashCardData[currentCardIndex];

  return (
    <div className="container">
      <h1>Ultimate Coding Legend Test!</h1>
      <h2>Test your coding fundamentals with these flashcards!</h2>
      <h3>Number of Cards: {flashCardData.length}</h3>
      <FlashCard
        question={currentCard.question}
        answer={currentCard.answer}
        optionOne={currentCard.optionOne}
        optionTwo={currentCard.optionTwo}
        optionThree={currentCard.optionThree}
      />
      <Form answer={currentCard.answer} />
      <div>
        <button
          className={currentCardIndex === 0 ? "hidden" : ""}
          onClick={prevCard}
        >
          ⭠
        </button>
        <button
          className={
            currentCardIndex === flashCardData.length - 1 ? "hidden" : ""
          }
          onClick={nextCard}
        >
          ⭢
        </button>
      </div>
    </div>
  );
}

export default App;
const flashCardData = [
  {
    question: "What is the difference between a function and a method?",
    answer:
      "C. A function is a block of code that can be called by name. A method is a function that belongs to an object.",
    optionOne: "A. A function is a block of code that can be called by name.",
    optionTwo: "B. A method is a block of code that can be called by name.",
    optionThree:
      "C. A function is a block of code that can be called by name. A method is a function that belongs to an object.",
  },
  {
    question: "What is the DOM?",
    answer:
      "C. The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content dynamically.",
    optionOne: "A. It's a type of web browser.",
    optionTwo: "B. It's a database for web content.",
    optionThree: "C. It's a programming interface for web documents.",
  },
  {
    question: "What is HTTP?",
    answer:
      "A. HTTP (Hypertext Transfer Protocol) is an application protocol used for transmitting hypermedia documents, such as HTML. It is the foundation of any data exchange on the Web.",
    optionOne: "A. HyperText Transfer Protocol",
    optionTwo: "B. Hypertext Text Transfer Protocol",
    optionThree: "C. Hypertext Transfer Protocol",
  },
  {
    question: "Explain the concept of 'scope' in JavaScript.",
    answer:
      "C. Scope determines the visibility and accessibility of variables in JavaScript. It defines where variables can be accessed or referenced in your code.",
    optionOne: "A. It's a JavaScript library.",
    optionTwo: "B. It's a way to define colors in CSS.",
    optionThree: "C. It determines variable visibility in JavaScript.",
  },
  {
    question: "What is the purpose of CSS?",
    answer:
      "C. CSS (Cascading Style Sheets) is used for styling HTML documents. It defines the layout, colors, fonts, and other visual aspects of web pages.",
    optionOne: "A. To make coffee.",
    optionTwo: "B. To define webpage structure.",
    optionThree: "C. To style HTML documents.",
  },
  {
    question: "What is a data structure?",
    answer:
      "C. A data structure is a way of organizing and storing data to perform operations efficiently. Examples include arrays, linked lists, and trees.",
    optionOne: "A. A way to store information on a computer.",
    optionTwo: "B. A type of programming language.",
    optionThree: "C. A way to organize and store data efficiently.",
  },
  {
    question: "What is an algorithm?",
    answer:
      "C. An algorithm is a step-by-step procedure for solving a problem or accomplishing a task. It's a sequence of well-defined instructions.",
    optionOne: "A. A type of data structure.",
    optionTwo: "B. A programming error.",
    optionThree: "C. A step-by-step procedure for problem-solving.",
  },
  {
    question: "What is a variable in programming?",
    answer:
      "C. A variable is a symbolic name given to a piece of data in a program. It is used to store and manipulate data during program execution.",
    optionOne: "A. A container for liquids.",
    optionTwo: "B. A mathematical equation.",
    optionThree: "C. A symbolic name for data in a program.",
  },
  {
    question: "Explain the concept of 'object-oriented programming' (OOP).",
    answer:
      "C. OOP is a programming paradigm that uses objects to structure and organize code. It promotes modularity and reusability by representing real-world entities as objects.",
    optionOne: "A. An object-oriented language.",
    optionTwo: "B. A type of coffee.",
    optionThree: "C. A programming paradigm using objects.",
  },
  {
    question: "What is a loop in programming?",
    answer:
      "C. A loop is a control structure that repeats a set of instructions until a specific condition is met. It's used for performing repetitive tasks.",
    optionOne: "A. A type of dance.",
    optionTwo: "B. A structure for conditional statements.",
    optionThree: "C. A control structure for repetition.",
  },
  // Add more questions and answers here
];

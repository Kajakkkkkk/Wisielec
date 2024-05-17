import React from "react";

const Word = (props) => {
  const { selectedWord, guessedLetters } = props;

  return (
    <div>
      {selectedWord.split("").map((letter, index) => (
        <span key={index}>
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
};

export default Word;

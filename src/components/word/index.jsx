import React from "react";

const Word = ({ selectedWord, guessedLetters }) => {
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

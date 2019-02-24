import React from 'react';

const Suggestions = props => {
  return (
    <div className="Suggestions">
      {props.suggestions.map((word, i) => (
        <span
          onClick={() => props.onClickWord(word)}
          className="suggestion"
          key={i}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default Suggestions;

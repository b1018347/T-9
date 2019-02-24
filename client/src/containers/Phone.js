import React, { Component } from "react";
import Display from "components/Display";
import Suggestions from "components/Suggestions";
import Button from "components/Button";
import { fetchWords } from "logic";

class Phone extends Component {
  constructor() {
    super();
    this.state = {
      display: [],
      number: "",
      text: "",
      // currentWord: { number: "", text: "" },
      suggestions: [],
      buttons: [
        { number: 1, letters: "_" },
        { number: 2, letters: "abc" },
        { number: 3, letters: "def" },
        { number: 4, letters: "ghi" },
        { number: 5, letters: "jkl" },
        { number: 6, letters: "mno" },
        { number: 7, letters: "pqrs" },
        { number: 8, letters: "tuv" },
        { number: 9, letters: "wxzy" }
      ]
    };
  }

  handleButtonClick = number => {
    if (number === 1) {
      return this.handleWordSelection(this.state.text);
    }
    this.setState(
      state => ({
        number: state.number + number
      }),
      async () => {
        const words = await fetchWords(this.state.number);
        const suggestions = words ? words.slice(0, 10) : [];
        this.setState(state => ({
          text: words ? words[0] : state.text,
          suggestions
        }));
      }
    );
  };

  handleWordSelection = word => {
    this.setState(state => ({
      display: [...state.display, word],
      number: "",
      text: "",
      suggestions: []
    }));
  };

  render() {
    return (
      <div className="phone">
        <Display value={[...this.state.display, this.state.text].join(" ")} />
        <Suggestions
          onClickWord={this.handleWordSelection}
          suggestions={this.state.suggestions}
        />
        <div className="phone__buttons">
          {this.state.buttons.map(button => {
            return (
              <Button
                key={button.number}
                button={button}
                handleButtonClick={this.handleButtonClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Phone;

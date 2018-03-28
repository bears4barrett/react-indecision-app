import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  deleteAllOptions = () => {
    this.setState(() => ({options: []}));
  };

  deleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  addOption = (option) => {
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }));
  };

  selectOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];
    this.setState(() => ({ selectedOption }));
  };

  clearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  }

  componentDidMount() {
    const jsonOptions = localStorage.getItem('options');
    let options;
    try {
      options = JSON.parse(jsonOptions);
    } catch(e) {
      // Do nothing
    }
    this.setState(() => ({ options }));
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            selectOption={this.selectOption}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              deleteAllOptions={this.deleteAllOptions}
              deleteOption={this.deleteOption}
            />
            <AddOption
              addOption={this.addOption}
            />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            clearSelectedOption={this.clearSelectedOption}
          />
        </div>
      </div>
    );
  }
}

export default IndecisionApp;

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.deleteAllOptions = this.deleteAllOptions.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.addOption = this.addOption.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.state = {
      options: []
    }
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

  deleteAllOptions() {
    this.setState(() => ({options: []}));
  }

  deleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  addOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }));
  }

  selectOption() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];
    alert(selectedOption);
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          selectOption={this.selectOption}
        />
        <Options
          options={this.state.options}
          deleteAllOptions={this.deleteAllOptions}
          deleteOption={this.deleteOption}
        />
        <AddOption
          addOption={this.addOption}
        />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.selectOption}
      >
        What should I do?
      </button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteAllOptions}>Remove All</button>
      {props.options.length === 0 && <p>Add some options!</p>}
      {
        props.options.map((option, index) => (
            <Option
              key={index}
              optionText={option}
              deleteOption={props.deleteOption}
            />
        ))
      }
    </div>
  );
}

const Option = (props) => {
  return (
      <div>
          {props.optionText}
          <button
            onClick={(e) => {
              props.deleteOption(props.optionText)
            }}
          >
            Remove
          </button>
      </div>
  );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  addOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.addOption(option);

    this.setState(() => ({ error }));

    if (!error) {
            e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.addOption}>
          <input type='text' name='option'/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

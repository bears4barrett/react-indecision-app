console.log('App.js is running!');

// JSX - Javascript XML
const app = {
  "title": "Indecision App",
  "subtitle": "The computer will decide for the indecisive",
  "options": []
};

const getSubtitle = (app) => {
  if(app.subtitle) {
    return <p>{app.subtitle}</p>;
  }
};

const getOptions = (app) => {
  if(app.options && app.options.length > 0) {
    let listOptions = app.options.map((option, index) => <li key={index}>{option}</li>);
    return <ol>{listOptions}</ol>;
  }
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const selectedOption = app.options[randomNum];
  alert(selectedOption);

};

const removeAllOptions = () => {
  app.options = [];
  render();
};

const formSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if(option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const appRoot = document.getElementById('app');
const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <button disabled={app.options.length === 0} onClick={makeDecision}>Make Decision</button>
      <button disabled={app.options.length === 0} onClick={removeAllOptions}>Remove All</button>
      {getOptions(app)}
      <form onSubmit={formSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();

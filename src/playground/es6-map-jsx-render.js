console.log('App.js is running!');

// JSX - Javascript XML
const app = {
  "title": "My App",
  "subtitle": "My Subtitle",
  "options": ['One', 'Two']
};

function getSubtitle(app) {
  if(app.subtitle) {
    return <p>{app.subtitle}</p>;
  }
};

function getOptions(app) {
  if(app.options && app.options.length > 0) {
    let listOptions = app.options.map((option) => <li key={option}>{option}</li>);
    return <ul>{listOptions}</ul>;
  }
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {getSubtitle(app)}
    {getOptions(app)}
  </div>
);

const user = {
  "name": "Barrett J",
  "age": 31,
  "location": "Austin"
};

function getLocation(user) {
  if (user.location) {
    return <p>Location: {user.location}</p>;
  }
};

const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

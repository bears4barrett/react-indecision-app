class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.state = {
      visible: false
    }
  }

  toggleDetails() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleDetails}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visible && <p>These are the details!</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// console.log('App.js is running!');
//
// let hideDetails = true;
//
// const toggleDetails = () => {
//   hideDetails = !hideDetails;
//   render();
// };
//
// const appRoot = document.getElementById('app');
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleDetails}>{hideDetails ? 'Show Details' : 'Hide Details'}</button>
//       <p hidden={hideDetails}>These are the details!</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
//
// render();

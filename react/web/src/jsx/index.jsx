// hello world
ReactDOM.render(<h1>hello world</h1>, document.getElementById('root'));

// component
class Welcome extends React.Component {
  render() { return <h1>{this.props.user.name}</h1>; }
};
user = {name: "sushi"}
ReactDOM.render(<Welcome user={user}/>, welcome);

// state
class State extends React.Component {
  constructor(props) { super(props); this.state = { value: 42}; }
  render() { return <div>{this.state.value}</div>; }
}

ReactDOM.render(<State/>, state);

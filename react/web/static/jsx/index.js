// hello world
ReactDOM.render( /*#__PURE__*/React.createElement("h1", null, "hello world"), document.getElementById('root')); // component

class Welcome extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("h1", null, this.props.user.name);
  }

}

;
user = {
  name: "sushi"
};
ReactDOM.render( /*#__PURE__*/React.createElement(Welcome, {
  user: user
}), welcome); // state

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 42
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, this.state.value);
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(State, null), state);


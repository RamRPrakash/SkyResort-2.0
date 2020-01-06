import React, { Component } from "react";
import Alert from "./Alert";

const alert = (self, ...msg) => {
  console.log(typeof self)
  localStorage.setItem("alert", JSON.stringify(self) );
  var data = JSON.parse(localStorage.getItem("alert")) ;
  self.Myalert(data, ...msg);
};

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      msg: ""
    };
  }
  componentWillMount() {
    alert(this);
  }

  Myalert = (self, data) => {
    console.log({ self });
    console.log({ data });
    this.setState({
      open: true,
      msg: data
    });
  };
  one = () => {
    var data = 20;
    alert("one", data);
  };
  two = () => {
    var data = 20;
    alert(this, `two ${data}`);
  };
  three = () => {
    alert(this, "three");
  };
  close = () => {
    this.setState({
      open: false
    });
  };
  render() {
    return (
      <div>
        <input type="button" value="one" onClick={this.one} />
        <input type="button" value="two" onClick={this.two} />
        <input type="button" value="three" onClick={this.three} />

        <input type="button" value="Alert" onClick={() => this.Myalert("a")} />
        <Alert open={this.state.open}>
          {this.state.msg}
          <input type="button" value="close" onClick={this.close} />
        </Alert>
      </div>
    );
  }
}
export default Check;

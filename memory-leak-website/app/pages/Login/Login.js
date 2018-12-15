import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {message, Button, Input} from "antd";
import loginActionCreator from "./LoginActions";
import {withRouter} from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.onLoginBottomPressed = this.onLoginBottomPressed.bind(this);
    this.inputValue = {
      account: "",
      password: ""
    };
  }

  onLoginBottomPressed() {
    this.props.loginAction.fetchLoginData({
      ...this.inputValue
    });
  }

  componentWillReceiveProps(nextProps) {
    const {code} = nextProps.mainReducer;

    if (code === 200) {
      return this.props.history.push("/index");
    }

    // if (code != 200) {
    //   return alert("登录失败～");
    // }
  }

  render() {
    return (
      <div>
        <h1 style={styles.title}>memory-leak-website</h1>
        <div style={styles.input1}>
          账号：
          <Input
            onChange={(e) => {
              this.inputValue.account = e.target.value;
            }}
          />
        </div>

        <div style={styles.input2}>
          密码：
          <Input
            onChange={(e) => {
              this.inputValue.password = e.target.value;
            }}
          />
        </div>
        <div style={styles.button}>
          <Button onClick={this.onLoginBottomPressed}>登录</Button>
        </div>
      </div>
    );
  }
}

const styles = {
  title: {
    position: "absolute",
    top: "15%",
    left: "40%"
  },
  input1: {
    position: "absolute",
    top: "30%",
    left: "42%"
  },
  input2: {
    position: "absolute",
    top: "40%",
    left: "42%"
  },
  button: {
    position: "absolute",
    top: "50%",
    left: "48%"
  }
};

const mapStateToProps = (state) => {
  const {loginReducer, mainReducer} = state;
  return {
    loginReducer,
    mainReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  const loginAction = bindActionCreators(loginActionCreator, dispatch);
  return {
    loginAction
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));

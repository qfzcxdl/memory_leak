import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import mainActionCreator from "./MainActions";

import Index from "../Index/Index";
import Login from "../Login/Login";

class Main extends React.Component {
  componentDidMount() {
    this.props.mainAction.fetchAuthData({that: this});
  }

  componentDidUpdate(prevProps) {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";
    if (this.props.mainReducer.code !== 200) {
      if (this.props.location.pathname !== "/login") {
        this.props.history.push("/login");
      }
    }
  }

  render() {
    const {loading, code} = this.props.mainReducer;

    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/index" component={Index} />
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
};

const mapDispatchToProps = (dispatch) => {
  const mainAction = bindActionCreators(mainActionCreator, dispatch);
  return {
    mainAction
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);

import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router} from "react-router-dom";
import Store from "./store/index";
import Main from "./pages/Main/Main";
import {Provider} from "react-redux";
import {LocaleProvider, DatePicker, message} from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
moment.locale("zh-cn");

const MOUNT_NODE = document.getElementById("app");
const INITIAL_STATE = window.INITIAL_STATE || {};
const {store} = Store(INITIAL_STATE)();
window.store = store;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch(err, info) {
    console.log(err, info);
  }

  render() {
    return (
      <Provider store={store}>
        <LocaleProvider locale={zhCN} store={store}>
          <Router>
            <Main />
          </Router>
        </LocaleProvider>
      </Provider>
    );
  }
}

if (process.env.NODE_ENV === `development`) {
  ReactDOM.render(<App />, MOUNT_NODE);
} else {
  ReactDOM.hydrate(<App />, MOUNT_NODE);
}

import React from "react";
import {connect} from "react-redux";
import {Route, Link, Switch, Redirect} from "react-router-dom";
import {Layout, Menu, Icon} from "antd";
const {SubMenu} = Menu;
const {Header, Sider, Content} = Layout;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Sider
          style={{
            height: "100vh",
            position: "fixed",
            left: 0
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{height: "100%", borderRight: 0}}
          >
            <Menu.Item key="addVocabulary">
              <Link to="/index/addVocabulary">test menu</Link>
            </Menu.Item>
            
          </Menu>
        </Sider>
        <Layout style={{marginLeft: 200}}>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            <Switch />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Index;

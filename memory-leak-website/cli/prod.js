import express from "express";
import path from "path";
import React from "react";
import {renderToString} from "react-dom/server";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react";
import {StaticRouter, Route} from "react-router-dom";
import Store from "../app/store";
import Main from "../app/pages/Main/Main";
const {PORT_FRONTEND} = require("../config");

const app = express();

app.use(express.static(path.join(__dirname, "../dist/client/")));
app.get("/*", function(req, res) {
  const INITIAL_STATE = {testReducer: {message: "Hello SSR"}};
  const {store, persistor} = Store(INITIAL_STATE, true)();
  const reactDOM = renderToString(JSX(store, persistor, req.url, {}));

  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(HTMLTemplate(reactDOM, INITIAL_STATE));
});

app.listen(PORT_FRONTEND);

function HTMLTemplate(reactDOM, initialState) {
  return `
  <!DOCTYPE html>
  <html>
  
  <head>
    <meta charset="utf-8">
    <title>医学实验室管理后台</title>
    <link rel="stylesheet" type="text/css" href="./main.css" />
  </head>
  
  <body>
    <div id="app">${reactDOM}</div>
    <script>
      window.INITIAL_STATE = ${JSON.stringify(initialState)};
    </script>
    <script src="./bundle.js"></script>
  </body>
  
  </html>
  `;
}
function JSX(store, persistor, url, context) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StaticRouter location={url} context={context}>
          <Main />
        </StaticRouter>
      </PersistGate>
    </Provider>
  );
}

import React from "react"
import ReactDom from "react-dom"
import { Provider } from "react-redux"

// local exports
import Store from "./store"
import App from "./App"

ReactDom.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
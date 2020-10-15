import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { BrowserRouter as Router } from "react-router-dom"

const app = document.getElementById("root")
app
  ? ReactDOM.render(
      <Router>
        <App />
      </Router>,
      app
    )
  : false

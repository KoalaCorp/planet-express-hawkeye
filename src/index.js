import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

const app = document.getElementById("root")
app ? ReactDOM.render(<App />, app) : false

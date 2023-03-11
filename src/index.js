import React from "react"
import ReactDOM from "react-dom/client"
import "./style/index.scss"
import App from "./App"
import UserProvider from "./context/user/userReducer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <UserProvider>
        <App/>
    </UserProvider>,
)
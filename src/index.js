import React from "react"
import ReactDOM from "react-dom/client"
import "./style/index.scss"
import App from "./App"
import UserProvider from "./context/user/userReducer"
import PackProvider from "./context/pack/packReducer"
import CartProvider from "./context/cart/cartReducer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <UserProvider>
        <PackProvider>
            <CartProvider>
                <App/>
            </CartProvider>
        </PackProvider>
    </UserProvider>,
)
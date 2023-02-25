import Login from "./view/page/Login"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Otp from "./view/page/Otp"
import Register from "./view/page/Register"

function App()
{
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/login/Otp/:phone/Register" element={<Register/>}/>
            <Route path="/login/Otp/:phone" element={<Otp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<div>404</div>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App

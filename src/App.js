import Login from "./view/page/Login"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Otp from "./view/page/Otp"
import Register from "./view/page/Register"
import Suggest from "./view/page/Suggest"
import DailyGoal from "./view/page/DailyGoal"

function App()
{
    return (
    <BrowserRouter>
        <Routes>
            <Route path="Suggest/DailyGoal" element={<DailyGoal/>}/>
            <Route path="Suggest" element={<Suggest/>}/>
            <Route path="/login/Otp/:phone/Register" element={<Register/>}/>
            <Route path="/login/Otp/:phone" element={<Otp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<div>404</div>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default App

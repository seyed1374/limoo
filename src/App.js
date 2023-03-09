import Login from "./view/page/Login"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Otp from "./view/page/Otp"
import Register from "./view/page/Register"
import Suggest from "./view/page/Suggest"
import DailyGoal from "./view/page/DailyGoal"
import HomePage from "./view/page/HomePage"
import AddPackage from "./view/page/AddPackage"
import AddFlashCard from "./view/page/AddFlashCard"


function App()
{
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/AddPackage/AddFlashCard/:name" element={<AddFlashCard/>}/>
            <Route path="AddPackage" element={<AddPackage/>}/>
            <Route path="HomePage" element={<HomePage/>}/>
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

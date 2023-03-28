import Login from "./view/page/Login"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Otp from "./view/page/Otp"
import Register from "./view/page/Register"
import Suggest from "./view/page/Suggest"
import DailyGoal from "./view/page/DailyGoal"
import HomePage from "./view/page/HomePage"
import AddPackage from "./view/page/AddPackage"
import AddFlashCard from "./view/page/AddFlashCard"
import PrivateRoute from "./view/component/PrivateRoute"
import MakingFlashCards from "./view/page/MakingFlashCards"

function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/MakingFlashCards" element={<MakingFlashCards/>}/>
                <Route path="/AddPackage/AddFlashCard/:_id" element={<AddFlashCard/>}/>
                <Route path="AddPackage" element={<AddPackage/>}/>
                <Route path="Suggest/DailyGoal" element={<DailyGoal/>}/>
                <Route path="Suggest" element={<Suggest/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/login/Otp/:phone" element={<Otp/>}/>
                <Route path="/login" element={<PrivateRoute ifLogin={false}><Login/></PrivateRoute>}/>
                <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App

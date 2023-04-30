import Login from "./view/page/Login"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Otp from "./view/page/Otp"
import Register from "./view/page/Register"
import DailyGoal from "./view/page/DailyGoal"
import HomePage from "./view/page/HomePage"
import AddPack from "./view/page/AddPack"
import PrivateRoute from "./view/component/PrivateRoute"
import AddFlashCards from "./view/page/addFlashCards"
import Pack from "./view/page/pack"
import PackCarts from "./view/page/PackCarts"
import Profile from "./view/page/Profile"
import URLS from "./constant/URLS"
import Practice from "./view/page/Practice"

function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path={URLS.practice} element={<PrivateRoute><Practice/></PrivateRoute>}/>
                <Route path={URLS.profile} element={<PrivateRoute><Profile/></PrivateRoute>}/>
                <Route path={URLS.packCarts(":pack_id")} element={<PrivateRoute><PackCarts/></PrivateRoute>}/>
                <Route path={URLS.pack(":pack_id")} element={<PrivateRoute><Pack/></PrivateRoute>}/>
                <Route path={URLS.addFlashCart(":pack_id")} element={<PrivateRoute><AddFlashCards/></PrivateRoute>}/>
                <Route path={URLS.updateFlashCart(":pack_id",":cart_id")} element={<PrivateRoute><AddFlashCards/></PrivateRoute>}/>
                <Route path={URLS.addPack} element={<PrivateRoute><AddPack/></PrivateRoute>}/>
                <Route path={URLS.dailyGoal} element={<PrivateRoute><DailyGoal/></PrivateRoute>}/>
                <Route path={URLS.register} element={<PrivateRoute><Register/></PrivateRoute>}/>
                <Route path={URLS.otp(":phone")} element={<PrivateRoute ifLogin={false}><Otp/></PrivateRoute>}/>
                <Route path={URLS.login} element={<PrivateRoute ifLogin={false}><Login/></PrivateRoute>}/>
                <Route path="*" element={<PrivateRoute><HomePage/></PrivateRoute>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App

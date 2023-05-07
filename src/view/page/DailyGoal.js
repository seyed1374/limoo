import ComeBack from "../component/ComeBack"
import Button from "../component/Button"
import {useNavigate} from "react-router-dom"
import {useContext, useState} from "react"
import {UserContext} from "../../context/user/userReducer"
import userActions from "../../context/user/userActions"

function DailyGoal() {

    let navigate = useNavigate()
    const {dispatch} = useContext(UserContext)
    const [twentyGoal,setTwentyGoal]= useState("20")
    const [thirtyGoal,setThirtyGoal]= useState("30")
    const [fortyGoal,setFortyGoal]= useState("40")

    function onTwentyClick(){

        userActions.updateUser({data:{daily_goal:twentyGoal},dispatch})
            .then(() =>
            {
                console.log("OK")
            })
            .catch(() =>
            {
                console.log("NOK")
            })
    }

    function onThirtyClick(){
        userActions.updateUser({data:{daily_goal:thirtyGoal},dispatch})
            .then(() =>
            {
                console.log("OK")
            })
            .catch(() =>
            {
                console.log("NOK")
            })
    }

    function onFortyClick(){
        userActions.updateUser({data:{daily_goal:fortyGoal},dispatch})
            .then(() =>
            {
                console.log("OK")
            })
            .catch(() =>
            {
                console.log("NOK")
            })
    }

    function onSubmit() {
        navigate(`/`)
    }
    return(
        <div className="daily-goal">
            <div className="daily-goal-detail">
                <ComeBack/>
                <div className="daily-goal-detail-title">اهداف روزانه</div>
                <div className="daily-goal-detail-desc">تعداد فلش کارت هایی که بصورت روزانه مرور خواهید کرد را انتخاب کنید.</div>
                <div className="daily-goal-detail-cart" onClick={onTwentyClick}>20 فلش کارت </div>
                <div className="daily-goal-detail-cart" onClick={onThirtyClick}>30 فلش کارت </div>
                <div className="daily-goal-detail-cart" onClick={onFortyClick}>40 فلش کارت </div>

            </div>
            <div className="daily-goal-buttons">
                <button className="daily-goal-buttons-reject">رد کردن</button>
                <Button value="ادامه" onClick={onSubmit}/>
            </div>
        </div>
    )
}

export default DailyGoal
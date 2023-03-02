import cart from "../../media/Vector.svg"
import ComeBack from "../component/ComeBack"
import Button from "../component/Button"
import {useNavigate} from "react-router-dom"

function Suggest({value})
{
    let navigate = useNavigate()

    function onSubmit(){
        navigate(`/Suggest/DailyGoal`)
    }

    return (
        <div className="suggest">
            <div className="suggest-detail">
                <ComeBack/>
                <div className="suggest-detail-title">بسته های پیشنهادی برای شروع</div>
                <div className="suggest-detail-desc">تعداد فلش کارت هایی که بصورت روزانه مرور خواهید کرد را انتخاب
                    کنید.
                </div>
                <div className="suggest-detail-cart">
                    125 واژه دشوار
                    <div className="suggest-detail-cart-desc">
                        <img className="suggest-detail-cart-desc-img" src={cart} alt="فلش کارت"/>
                        125 فلش کارت
                    </div>
                </div>
            </div>
            <div className="suggest-buttons">
                <button className="suggest-buttons-reject">رد کردن</button>
                <Button value="ادامه" onClick={onSubmit}/>
            </div>
        </div>
    )
}

export default Suggest
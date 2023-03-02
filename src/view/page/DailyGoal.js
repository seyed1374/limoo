import ComeBack from "../component/ComeBack"
import Button from "../component/Button"

function DailyGoal() {
    return(
        <div className="daily-goal">
            <div className="daily-goal-detail">
                <ComeBack/>
                <div className="daily-goal-detail-title">اهداف روزانه</div>
                <div className="daily-goal-detail-desc">تعداد فلش کارت هایی که بصورت روزانه مرور خواهید کرد را انتخاب کنید.</div>
                <div className="daily-goal-detail-cart">20 فلش کارت </div>
                <div className="daily-goal-detail-edit">
                    قابل ویرایش در
                    <div className="daily-goal-detail-edit-click">تنظیمات</div>
                </div>
            </div>
            <div className="daily-goal-buttons">
                <button className="daily-goal-buttons-reject">رد کردن</button>
                <Button value="ادامه"/>
            </div>
        </div>
    )
}

export default DailyGoal
import ComeBack from "../component/ComeBack"
import pic from "../../media/Ellipse 31.png"
import edit from "../../media/Vector8.svg"
import target from "../../media/Vector9.svg"
import theme from "../../media/Vector10.svg"
import alarm from "../../media/iconoir_alarm.svg"
import exit from "../../media/Vector 12.svg"
import {useContext, useState} from "react"
import {UserContext} from "../../context/user/userReducer"


function Profile()
{
    const {state: user} = useContext(UserContext)
    const [themeClick, setThemeClick] = useState(true)
    const [alarmClick, setAlarmClick] = useState(true)

    function onThemeClick()
    {
        setThemeClick(themeClick => !themeClick)
    }

    function onAlarmClick()
    {
        setAlarmClick(alarmClick => !alarmClick)
    }


    return (
        <div className="profile">
            <div className="profile-header">
                <div className="profile-header-comeback">
                    <ComeBack/>
                    <div className="profile-header-comeback-text">بازگشت</div>
                </div>
                <div className="profile-header-title">پروفایل</div>
            </div>
            <div className="homepage-header-border"/>
            <div className="profile-body">
                <img className="profile-body-img" src={pic} alt="pic"/>
                <div className="profile-body-name">
                    <span>{user.first_name} </span>
                    {user.last_name}
                </div>
                <div className="profile-body-phone">
                    {user.phone}
                </div>
                <div className="profile-body-edit">
                    <img className="profile-body-edit-img" src={edit} alt="edit"/>
                    <div className="profile-body-edit-text">ویرایش</div>
                </div>
            </div>
            <div className="profile-footer">
                <div className="profile-footer-detail">
                    <div className="profile-footer-detail-target">
                        <div className="profile-footer-detail-target-title">
                            <img className="profile-footer-detail-target-title-img" src={target} alt={target}/>
                            هدف روزانه
                        </div>
                        <div className="profile-footer-detail-target-desc">
                            {user.daily_goal}
                            <span> فلش کارت</span>
                        </div>
                    </div>
                    <div className="profile-footer-modal-border"/>
                    <div className="profile-footer-detail-target">
                        <div className="profile-footer-detail-target-title">
                            <img className="profile-footer-detail-target-title-img" src={theme} alt={target}/>
                            تم دارک
                        </div>
                        <div className={themeClick? "profile-footer-switch-key": "profile-footer-switch-key on"} onClick={onThemeClick}>
                            <div className={themeClick? "switch-color": "switch-color on"}></div>
                            <div className={themeClick? "switch-toggle": "switch-toggle on"}></div>
                        </div>
                    </div>
                    <div className="profile-footer-modal-border"/>
                    <div className="profile-footer-detail-target">
                        <div className="profile-footer-detail-target-title">
                            <img className="profile-footer-detail-target-title-img" src={alarm} alt={target}/>
                            آلارم
                        </div>
                        <div className={alarmClick? "profile-footer-switch-key": "profile-footer-switch-key on"} onClick={onAlarmClick}>
                            <div className={alarmClick? "switch-color": "switch-color on"}></div>
                            <div className={alarmClick? "switch-toggle": "switch-toggle on"}></div>
                        </div>
                    </div>
                    <div className="profile-footer-modal-border"/>
                    <div className="profile-footer-detail-target">
                        <div className="profile-footer-detail-exit">
                            <img className="profile-footer-detail-target-title-img" src={exit} alt={target}/>
                            خروج از حساب
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
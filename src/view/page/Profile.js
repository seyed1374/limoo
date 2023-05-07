import ComeBack from "../component/ComeBack"
import pic from "../../media/Ellipse 31.png"
import edit from "../../media/Group 50.svg"
import target from "../../media/Vector9.svg"
import theme from "../../media/Group_2794.svg"
import support from "../../media/Vector11.svg"
import exit from "../../media/Group 100.svg"
import flesh from "../../media/Vector 141.svg"
import {useContext, useState} from "react"
import {UserContext} from "../../context/user/userReducer"
import {useNavigate} from "react-router-dom"
import URLS from "../../constant/URLS"


function Profile()
{
    const {state: user} = useContext(UserContext)
    const [themeClick, setThemeClick] = useState(true)
    let navigate = useNavigate()

    function onThemeClick()
    {
        setThemeClick(themeClick => !themeClick)
    }

    function onEditClick(){
        navigate(URLS.editInformation)
    }

    function onTargetClick(){
        navigate(URLS.dailyGoal)
    }


    return (
        <div className="profile">
            <div className="profile-header">
                <div className="profile-header-comeback">
                    <ComeBack/>
                </div>
                <div className="profile-header-title">پروفایل</div>
            </div>
            <div className="homepage-header-border"/>
            <div className="profile-body">
                <div className="profile-body-information">
                    <img className="profile-body-img" src={"https://api.li-moo.ir/" + user.avatar} alt="pic"/>
                    <div className="profile-body-information-detail">
                        <div className="profile-body-name">
                            <span>{user.first_name} </span>
                            {user.last_name}
                        </div>
                        <div className="profile-body-phone">
                            {user.phone}
                        </div>
                    </div>
                </div>
                <img className="profile-body-edit-img" src={edit} alt="edit" onClick={onEditClick}/>
            </div>
            <div className="profile-footer">
                <div className="profile-footer-detail">
                    <div className="profile-footer-detail-target" onClick={onTargetClick}>
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
                            حالت نمایش برنامه
                        </div>
                        <div className={themeClick ? "profile-footer-switch-key" : "profile-footer-switch-key on"}
                             onClick={onThemeClick} >
                            <div className={themeClick ? "switch-color" : "switch-color on"}></div>
                            <div className={themeClick ? "switch-toggle" : "switch-toggle on"}></div>
                        </div>
                    </div>
                    <div className="profile-footer-modal-border"/>
                    <div className="profile-footer-detail-target">
                        <div className="profile-footer-detail-target-title">
                            <img className="profile-footer-detail-target-title-img" src={support} alt={target}/>
                            پشتیبانی و سؤال‌های رایج
                        </div>
                        <img src={flesh} alt={flesh}/>
                    </div>
                    <div className="profile-footer-modal-border"/>
                    <div className="profile-footer-detail-target">
                        <div className="profile-footer-detail-exit">
                            <img className="profile-footer-detail-target-title-img" src={exit} alt={target}/>
                             خروج از حساب کاربری
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
import limoo from "../../media/لـیـمـو.svg"
import cart from "../../media/Vector.svg"
import edit from "../../media/Vector (2).png"
import Button from "../component/Button"
import profile from "../../media/Ellipse 31.png"
import {useNavigate} from "react-router-dom"
import {useContext} from "react"
import {UserContext} from "../../context/user/userReducer"

function HomePage()
{
    const {state: user} = useContext(UserContext)

    let navigate = useNavigate()

    function onAddClick()
    {
        navigate(`/AddPackage`)
    }

    return (
        <div className="homepage">
            <div>
                <div className="homepage-header">
                    <div className="homepage-header-add" onClick={onAddClick}>+</div>
                    <div className="homepage-header-package">بسته های من</div>
                    <img className="homepage-header-logo" src={limoo} alt="لیمو"/>
                </div>
                <div className="homepage-header-border"/>
                <div className="homepage-detail-cart">
                    <div className="homepage-detail-cart-head">
                        125 واژه دشوار
                        <img className="homepage-detail-cart-edit" src={edit} alt="تغییر دادن"/>
                    </div>
                    <div className="suggest-detail-cart-desc">
                        <img className="suggest-detail-cart-desc-img" src={cart} alt="فلش کارت"/>
                        125 فلش کارت
                    </div>
                </div>
            </div>
            <div className="homepage-footer">
                <img className="homepage-footer-img" src={profile} alt="عکس"/>
                <div className="homepage-footer-name">
                    <span>{user.first_name} </span>
                    {user.last_name}
                </div>
                <Button value="تمرین"/>
            </div>
        </div>
    )
}

export default HomePage
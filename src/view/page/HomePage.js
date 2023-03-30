import limoo from "../../media/لـیـمـو.svg"
import cart from "../../media/Vector.svg"
import edit from "../../media/Vector (2).png"
import Button from "../component/Button"
import profile from "../../media/Ellipse 31.png"
import {useNavigate, useParams} from "react-router-dom"
import {useContext, useEffect} from "react"
import {UserContext} from "../../context/user/userReducer"
import packActions from "../../context/pack/packActions"
import {PackContext} from "../../context/pack/packReducer"
import {CartContext} from "../../context/cart/cartReducer"

function HomePage()
{
    const {state: user} = useContext(UserContext)

    let navigate = useNavigate()
    const {state: pack, dispatch} = useContext(PackContext)

    const {state: cart} = useContext(CartContext)
    const {pack_id} = useParams()

    useEffect(() =>
    {
        packActions.getPack({dispatch})
    }, [])

    function onAddClick(e)
    {
        navigate(`/AddPackage`)
        // const file = e.target.files[0]
        // const formData = new FormData()
        // formData.append("excel", file)
    }

    function onPackClick(){
        navigate(`PracticePage1/${pack_id}`)
    }

    return (
        <div className="homepage">
            <div className="homepage-detail">
                <div className="homepage-header">
                    <div className="homepage-header-add" onClick={onAddClick}>+</div>
                    <div className="homepage-header-package">بسته های من</div>
                    <img className="homepage-header-logo" src={limoo} alt="لیمو"/>
                </div>
                <div className="homepage-header-border"/>
                {
                    pack.map(item =>
                        <div className="homepage-detail-cart" key={item._id} onClick={onPackClick}>
                            <div className="homepage-detail-cart-head">
                                {item.name}
                                <img className="homepage-detail-cart-edit" src={edit} alt="تغییر دادن"/>
                            </div>
                            <div className="suggest-detail-cart-desc">
                                <img className="suggest-detail-cart-desc-img" src={cart} alt="فلش کارت"/>
                                {item.carts_count}
                            </div>
                        </div>,
                    )
                }
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
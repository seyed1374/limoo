import limoo from "../../media/لـیـمـو.svg"
import Button from "../component/Button"
import {useNavigate} from "react-router-dom"
import {useContext, useEffect} from "react"
import {UserContext} from "../../context/user/userReducer"
import packActions from "../../context/pack/packActions"
import {PackContext} from "../../context/pack/packReducer"
import URLS from "../../constant/URLS"
import PackList from "../component/PackList"

function HomePage()
{
    const {state: user} = useContext(UserContext)

    let navigate = useNavigate()
    const {state: pack, dispatch} = useContext(PackContext)

    useEffect(() =>
    {
        packActions.getPack({dispatch})
    }, [])

    function onAddClick(e)
    {
        navigate(URLS.addPack)
        // const file = e.target.files[0]
        // const formData = new FormData()
        // formData.append("excel", file)
    }

    function onProfileClick()
    {
        navigate(URLS.profile)
    }

    function onPracticeClick()
    {
        navigate(URLS.practice)
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
                        <PackList key={item._id} data={item}/>
                    )
                }
            </div>
            <div className="homepage-footer">
                <img className="homepage-footer-img" src={"https://api.li-moo.ir/" + user.avatar} alt="عکس" onClick={onProfileClick}/>
                <div className="homepage-footer-name" onClick={onProfileClick}>
                    <span>{user.first_name} </span>
                    {user.last_name}
                </div>
                <Button value="تمرین" onClick={onPracticeClick}/>
            </div>
        </div>
    )
}

export default HomePage
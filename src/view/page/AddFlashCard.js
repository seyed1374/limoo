import ComeBack from "../component/ComeBack"
import {useNavigate, useParams} from "react-router-dom"
import flashCards from "../../media/g10.png"
import Button from "../component/Button"

function AddFlashCard() {

    const {name} = useParams()
    const isBtnDisable = true
    let navigate = useNavigate()

    function onMakeClick(){
        navigate(`/MakingFlashCards`)
    }

    return(
        <div className="add-flash-card">
            <div className="add-package-header">
                <div className="add-package-header-detail">
                    <ComeBack/>
                    <div className="add-package-header-title">{name}</div>
                    <div className="add-package-header-empty"/>
                </div>
                <div className="add-package-border"/>
            </div>
            <img className="add-flash-card-img" src={flashCards} alt="فلش کارت"/>
            <div className="add-flash-card-desc">با اضافه کردن فلش کارت های جدید بسته خود را کامل تر کنید.</div>
            <div className="add-flash-card-buttons">
                <div className="add-flash-card-button"> <Button value="ساختن فلش کارت" onClick={onMakeClick}/></div>
                <Button isDisable={isBtnDisable} value="بارگذاری فایل"/>
            </div>
        </div>
    )
}

export default AddFlashCard
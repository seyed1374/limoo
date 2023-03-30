import ComeBack from "../../component/ComeBack"
import flashcard from "../../../media/Vector2.svg"
import Button from "../../component/Button"
import {useNavigate} from "react-router-dom"

function PracticePage1()
{
    const isBtnDisable = true
    let navigate = useNavigate()


    function onSubmit(){
        navigate(`/PracticePage2`)
    }

    return (
        <div>
            <div className="add-package-header-detail">
                <ComeBack/>
                <div className="add-package-header-title">{}</div>
                <div className="add-package-header-empty"/>
            </div>
            <div className="add-package-border"/>
            <div className="practice-page1-daily-goal">
                <div className="practice-page1-daily-goal-detail">
                    <div className="practice-page1-daily-goal-detail-percent">0%</div>
                    <div className="practice-page1-daily-goal-detail-text">هدف روزانه</div>
                </div>
            </div>
            <div className="practice-page1-flash-cards">
                <img className="practice-page1-flash-cards-img" src={flashcard} alt="flashcard"/>
                <div className="practice-page1-flash-cards-text" onClick={onSubmit}>فلش کارت ها</div>
            </div>
            <div className="practice-page1-border-bottom"/>
            <div className="practice-page1-buttons">
                <Button isDisable={isBtnDisable} value="ساختن فلش کارت"/>
                <button className="practice-page1-buttons-upload">بارگذاری فایل</button>
            </div>
        </div>
    )
}

export default PracticePage1

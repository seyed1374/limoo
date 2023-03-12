import ComeBack from "../component/ComeBack"
import {useParams} from "react-router-dom"
import Button from "../component/Button"
import {useState} from "react"

function MakingFlashCards()
{
    const {name} = useParams()
    const [onCard , setOnCard] = useState("")
    const [onBackCard, setOnBackCard] = useState("")
    const isBtnDisable = onCard.length < 2 & onBackCard.length < 2

    function onChangeCard(e){
        setOnCard(e.target.value)
    }

    function onChangeBackCard(e){
        setOnBackCard(e.target.value)
    }



    return (
        <div className="making-flash-cards">
            <div className="add-package-header">
                <div className="add-package-header-detail">
                    <ComeBack/>
                    <div className="add-package-header-title">{name}</div>
                    <div className="add-package-header-empty"/>
                </div>
                <div className="add-package-border"/>
                <div className="making-flash-cards-body">
                    <div className="making-flash-cards-body-name"> روی کارت</div>
                    <input className="making-flash-cards-body-name-input" placeholder="متن روی کارت را بنویسید" onChange={onChangeCard}/>
                    <div className="making-flash-cards-body-name"> پشت کارت</div>
                    <input className="making-flash-cards-body-name-input" placeholder="متن پشت کارت را بنویسید" onChange={onChangeBackCard}/>
                    <div className="making-flash-cards-body-name">مثال یا مترادف</div>
                    <input className="making-flash-cards-body-name-input" placeholder="مثال یا مترادفی برای آن بنویسید"/>
                </div>
            </div>
            <div className="making-flash-cards-btn"><Button value="ذخیره" isDisable={isBtnDisable}/></div>
        </div>
    )
}

export default MakingFlashCards
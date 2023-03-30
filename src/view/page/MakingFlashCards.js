import ComeBack from "../component/ComeBack"
import {useParams} from "react-router-dom"
import Button from "../component/Button"
import {useContext, useEffect, useState} from "react"
import cartActions from "../../context/cart/cartActions"
import {CartContext} from "../../context/cart/cartReducer"
import packActions from "../../context/pack/packActions"
import {PackContext} from "../../context/pack/packReducer"

function MakingFlashCards()
{
    const {name} = useParams()
    const {dispatch} = useContext(CartContext)
    const [onCard , setOnCard] = useState("")
    const [onBackCard, setOnBackCard] = useState("")
    const [onDescCard, setOnDescCard] = useState("")
    const isBtnDisable = !(onCard.length > 1 && onBackCard.length > 1)

    const {state: pack} = useContext(PackContext)
    const {_id} = useParams()
    const selectedPack = pack.filter(item => item._id === _id)[0]

    function onChangeCard(e){
        setOnCard(e.target.value)
    }

    function onChangeBackCard(e){
        setOnBackCard(e.target.value)
    }

    function onChangeDescCard(e){
        setOnDescCard(e.target.value)
    }

    function onSubmit(){
        cartActions.updateCart({data: {front: onCard, back: onBackCard, back_description: onDescCard}, dispatch})
            .then(() =>
            {
                console.log("OK")
            })
            .catch(() =>
            {
                console.log("NOK")
            })
    }


    return (
        <div className="making-flash-cards">
            <div className="add-package-header">
                <div className="add-package-header-detail">
                    <ComeBack/>
                    <div className="add-package-header-title">{selectedPack?.name}</div>
                    <div className="add-package-header-empty"/>
                </div>
                <div className="add-package-border"/>
                <div className="making-flash-cards-body">
                    <div className="making-flash-cards-body-name"> روی کارت</div>
                    <input className="making-flash-cards-body-name-input" placeholder="متن روی کارت را بنویسید" onChange={onChangeCard}/>
                    <div className="making-flash-cards-body-name"> پشت کارت</div>
                    <input className="making-flash-cards-body-name-input" placeholder="متن پشت کارت را بنویسید" onChange={onChangeBackCard}/>
                    <div className="making-flash-cards-body-name">مثال یا مترادف</div>
                    <input className="making-flash-cards-body-name-input" placeholder="مثال یا مترادفی برای آن بنویسید" onChange={onChangeDescCard}/>
                </div>
            </div>
            <div className="making-flash-cards-btn"><Button value="ذخیره" isDisable={isBtnDisable} onClick={onSubmit}/></div>
        </div>
    )
}

export default MakingFlashCards
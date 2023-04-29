import ComeBack from "../component/ComeBack"
import {useParams} from "react-router-dom"
import Button from "../component/Button"
import {useContext, useEffect, useState} from "react"
import cartActions from "../../context/cart/cartActions"
import {CartContext} from "../../context/cart/cartReducer"
import packActions from "../../context/pack/packActions"
import {PackContext} from "../../context/pack/packReducer"

function AddFlashCards()
{
    const {dispatch: packDispatch} = useContext(PackContext)
    const {dispatch} = useContext(CartContext)
    const [onCard, setOnCard] = useState("")
    const [onBackCard, setOnBackCard] = useState("")
    const [onDescCard, setOnDescCard] = useState("")
    const isBtnDisable = !(onCard.length > 1 && onBackCard.length > 1)
    const {state: pack} = useContext(PackContext)
    const {state: carts} = useContext(CartContext)
    const {pack_id, cart_id} = useParams()
    const isUpdate = !!cart_id
    const selectedPack = pack.filter(item => item._id === pack_id)[0]
    const updatedCart = carts?.filter?.(item => item._id === cart_id)[0]

    useEffect(() =>
    {
        packActions.getPack({dispatch: packDispatch})
        cartActions.getCart({dispatch, pack_id})
    }, [])

    function onChangeCard(e)
    {
        setOnCard(e.target.value)
    }

    function onChangeBackCard(e)
    {
        setOnBackCard(e.target.value)
    }

    function onChangeDescCard(e)
    {
        setOnDescCard(e.target.value)
    }

    function onSubmit()
    {
        if (isUpdate)
        {
            cartActions.updateCart({
                data: {front: onCard, back: onBackCard, back_description: onDescCard, pack_id, cart_id},
                dispatch,
            })
        }
        else
        {
            cartActions.makeCart({
                data: {front: onCard, back: onBackCard, back_description: onDescCard, pack_id},
                dispatch,
            })
                .then(() =>
                {
                    console.log("OK")
                })
                .catch(() =>
                {
                    console.log("NOK")
                })
        }
    }

    if (updatedCart)
    {
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
                        <input className="making-flash-cards-body-name-input" placeholder="متن روی کارت را بنویسید"
                               onChange={onChangeCard} defaultValue={updatedCart?.front}/>
                        <div className="making-flash-cards-body-name"> پشت کارت</div>
                        <input className="making-flash-cards-body-name-input" placeholder="متن پشت کارت را بنویسید"
                               onChange={onChangeBackCard}/>
                        <div className="making-flash-cards-body-name">مثال یا مترادف</div>
                        <input className="making-flash-cards-body-name-input"
                               placeholder="مثال یا مترادفی برای آن بنویسید"
                               onChange={onChangeDescCard}/>
                    </div>
                </div>
                <div className="making-flash-cards-btn"><Button value="ذخیره" isDisable={isBtnDisable}
                                                                onClick={onSubmit}/>
                </div>
            </div>
        )
    }
    else
    {
        return ("loading...")
    }
}

export default AddFlashCards
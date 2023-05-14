import ComeBack from "../component/ComeBack"
import {useNavigate, useParams} from "react-router-dom"
import Button from "../component/Button"
import {useContext, useEffect, useId, useState} from "react"
import cartActions from "../../context/cart/cartActions"
import {CartContext} from "../../context/cart/cartReducer"
import packActions from "../../context/pack/packActions"
import {PackContext} from "../../context/pack/packReducer"
import Input from "../component/input/Input"
import {toast} from "react-toastify"
import URLS from "../../constant/URLS"

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
    const updatedCart = carts?.[pack_id]?.filter?.(item => item._id === cart_id)[0]
    let navigate = useNavigate()
    const addFlashCartToast = useId()
    const onCartToast = useId()



    useEffect(() =>
    {
        packActions.getPack({dispatch: packDispatch})
        cartActions.getCart({dispatch, pack_id})
    }, [])

    function onCartClick(){
        toast.warning("لطفا حداقل دو حرف باشد", {
            toastId: onCartToast,
        })
    }

    function onChangeCard({value})
    {
        setOnCard(value)
    }

    function onChangeBackCard({value})
    {
        setOnBackCard(value)
    }

    function onChangeDescCard({value})
    {
        setOnDescCard(value)
    }

    function onSubmit()
    {
        if (isUpdate)
        {
            cartActions.updateCart({
                data: {front: onCard, back: onBackCard, back_description: onDescCard, pack_id, cart_id},
                dispatch,
            })
                .then(() =>
                {
                    toast.success(" با موفقیت ذخیره شد")
                    navigate(URLS.packCarts(pack_id))
                })
                .catch(() =>
                {
                    toast.error("با خطا مواجه شد", {
                        toastId: addFlashCartToast,
                    })
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
                    toast.success(" با موفقیت ذخیره شد")
                    navigate(URLS.packCarts(pack_id))
                })
                .catch(() =>
                {
                    toast.error("با خطا مواجه شد", {
                        toastId: addFlashCartToast,
                    })
                })
        }
    }

    if (!isUpdate || updatedCart)
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
                        <Input
                            className="making-flash-cards-body-name"
                            label="روی کارت"
                            placeholder="متن روی کارت را بنویسید"
                            onChange={onChangeCard}
                            onClick={onCartClick}
                            defaultValue={updatedCart?.front}
                            name="name"
                            focusOnMount
                            showClear
                            disabled={false}
                        />
                        <Input
                            className="making-flash-cards-body-name"
                            label="پشت کارت"
                            placeholder="متن پشت کارت را بنویسید"
                            onChange={onChangeBackCard}
                            onClick={onCartClick}
                            defaultValue={updatedCart?.back}
                            name="name"
                            focusOnMount
                            showClear
                            disabled={false}
                        />
                        <Input
                            className="making-flash-cards-body-name"
                            label="مثال یا مترادف"
                            placeholder="مثال یا مترادفی برای آن بنویسید"
                            onChange={onChangeDescCard}
                            defaultValue={updatedCart?.back_description}
                            name="name"
                            focusOnMount
                            showClear
                            disabled={false}
                        />
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
        return "loading..."
    }
}

export default AddFlashCards
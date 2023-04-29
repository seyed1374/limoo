import ComeBack from "../component/ComeBack"
import flashcard from "../../media/Vector2.svg"
import Button from "../component/Button"
import {useNavigate, useParams} from "react-router-dom"
import {CartContext} from "../../context/cart/cartReducer"
import cartActions from "../../context/cart/cartActions"
import {useContext, useEffect} from "react"
import {PackContext} from "../../context/pack/packReducer"
import packActions from "../../context/pack/packActions"
import flashCards from "../../media/g10.png"
import URLS from "../../constant/URLS"

function Pack()
{
    const {pack_id} = useParams()
    const isBtnDisable = true
    let navigate = useNavigate()
    const {state, dispatch} = useContext(CartContext)
    const carts = state[pack_id]
    const isEmpty = carts?.length === 0
    const isLoading = carts === undefined
    const {dispatch: packDispatch} = useContext(PackContext)
    const {state: pack} = useContext(PackContext)
    const selectedPack = pack.filter(item => item._id === pack_id)[0]

    useEffect(() =>
    {
        cartActions.getCart({dispatch, pack_id})
        packActions.getPack({dispatch: packDispatch})
    }, [])

    function onSubmit()
    {
        navigate(URLS.packCarts(pack_id))
    }

    function onMakeClick()
    {
        navigate(URLS.addFlashCart(selectedPack._id))
    }

    return (
        <div>
            {
                isLoading ?
                    "loading...."
                    :
                    <>
                        <div className="add-package-header-detail">
                            <ComeBack/>
                            <div className="add-package-header-title">{selectedPack?.name}</div>
                            <div className="add-package-header-empty"/>
                        </div>
                        <div className="add-package-border"/>
                        {
                            isEmpty ?
                                <div className="add-flash-card">
                                    <img className="add-flash-card-img" src={flashCards} alt="فلش کارت"/>
                                    <div className="add-flash-card-desc">با اضافه کردن فلش کارت های جدید بسته خود را
                                        کامل تر
                                        کنید.
                                    </div>
                                    <div className="add-flash-card-buttons">
                                        <div className="add-flash-card-button"><Button value="ساختن فلش کارت"
                                                                                       onClick={onMakeClick}/></div>
                                        <Button isDisable={isBtnDisable} value="بارگذاری فایل"/>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className="practice-page1-daily-goal">
                                        <div className="practice-page1-daily-goal-detail">
                                            <div className="practice-page1-daily-goal-detail-percent">0%</div>
                                            <div className="practice-page1-daily-goal-detail-text">هدف روزانه</div>
                                        </div>
                                    </div>
                                    <div className="practice-page1-flash-cards">
                                        <img className="practice-page1-flash-cards-img" src={flashcard}
                                             alt="flashcard"/>
                                        <div className="practice-page1-flash-cards-text" onClick={onSubmit}>فلش کارت ها
                                        </div>
                                    </div>
                                    <div className="practice-page1-border-bottom"/>
                                    <div className="practice-page1-buttons">
                                        <Button isDisable={isBtnDisable} value="ساختن فلش کارت"/>
                                        <button className="practice-page1-buttons-upload">بارگذاری فایل</button>
                                    </div>
                                </div>
                        }
                    </>
            }
        </div>
    )
}

export default Pack

import ComeBack from "../component/ComeBack"
import request from "../../helpers/request"
import {useEffect, useState} from "react"

function Practice()
{
    const [carts, setCarts] = useState([])
    const [showCartIndex, setShowCartIndex] = useState(0)
    const showingCart = carts[showCartIndex]
    const [backCart, setBackCart] = useState(false)

    useEffect(() =>
    {
        request.get({url: "cart-review"})
            .then(res =>
            {
                const {requiredCarts, newCarts} = res.data.data
                setCarts([...requiredCarts, ...newCarts])
            })
    }, [])


    function onAnswerClick()
    {
        setBackCart(!backCart)
    }

    function onNextCart()
    {
        setShowCartIndex(showCartIndex + 1)
        setBackCart(!backCart)
        showingCart()
    }

    function onKnownClick()
    {
    }

    function onUnableClick()
    {
    }

    return (
        <div>
            <div className="practice-header">
                <ComeBack/>
                <div className="practice-header-title">تمرین</div>
                <div></div>
            </div>
            <div className="practice-header-progress">
                <div className="practice-header-progress-bar"/>
                <div className="practice-header-progress-toggle"></div>
            </div>
            <div className="practice-carts">
                <div className={backCart ? "practice-cart-front review" : "practice-cart-front"}>
                    <div></div>
                    <div className="practice-cart-detail">{showingCart?.front}</div>
                    <div className="practice-cart-answer" onClick={onAnswerClick}>نمایش پاسخ</div>
                </div>
                {
                    backCart &&
                    <div className="practice-cart-back">
                        <div></div>
                        <div className="practice-cart-detail">{showingCart?.back}
                            <div className="practice-cart-detail-desc">{showingCart?.back_description}</div>
                        </div>
                        <div className="practice-cart-back-reaction" onClick={onNextCart}>
                            <button className="practice-cart-back-reaction-btn" onClick={onKnownClick}>no</button>
                            <div className="practice-cart-back-reaction-btn" onClick={onUnableClick}>ye</div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default Practice
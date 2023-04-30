import ComeBack from "../component/ComeBack"
import request from "../../helpers/request"
import {useEffect, useState} from "react"

function Practice()
{
    const [carts, setCarts] = useState([])
    const [showCartIndex, setShowCartIndex] = useState(0)
    const showingCart = carts[showCartIndex]

    useEffect(() =>
    {
        request.get({url: "cart-review"})
            .then(res =>{
                setCarts(res.data.data)
            })
    },[])

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
                <div className="practice-cart">
                    <div></div>
                    <div className="practice-cart-detail">{showCartIndex}</div>
                    <div className="practice-cart-answer">نمایش پاسخ</div>
                </div>

            </div>
        </div>
    )
}

export default Practice
import ComeBack from "../../component/ComeBack"
import search from "../../../media/Vector3.svg"
import edit from "../../../media/Vector4.svg"
import {CartContext} from "../../../context/cart/cartReducer"
import {useContext, useEffect} from "react"
import cartActions from "../../../context/cart/cartActions"

function PracticePage2()
{
    const {state: cart, dispatch} = useContext(CartContext)

    useEffect(() =>
    {
        cartActions.getCart({dispatch})
    }, [])

    return (
        <div>
            <div className="add-package-header-detail">
                <ComeBack/>
                <div className="add-package-header-title">{}</div>
                <div className="add-package-header-empty"/>
            </div>
            <div className="add-package-border"/>
            <div className="practice-page2-body">
                <div className="practice-page2-search">
                    <input className="practice-page2-search-detail" placeholder="Search flashcards"/>
                    <img className="practice-page2-search-img" src={search} alt="search"/>
                </div>
                {
                    cart.map(item =>
                        <div className="practice-page2-flash-card">
                            <img className="practice-page2-flash-card-edit" src={edit} alt="edit"/>
                            <div>
                                <div className="practice-page2-flash-card-on-card">{item.front}</div>
                                <div className="practice-page2-flash-card-back-card">اقتصادی، به صرفه</div>
                            </div>
                        </div>,
                    )
                }
            </div>
        </div>
    )
}

export default PracticePage2
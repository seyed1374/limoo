import ComeBack from "../component/ComeBack"
import search from "../../media/Vector3.svg"
import {CartContext} from "../../context/cart/cartReducer"
import {useContext, useEffect} from "react"
import cartActions from "../../context/cart/cartActions"
import {useParams} from "react-router-dom"
import {PackContext} from "../../context/pack/packReducer"
import packActions from "../../context/pack/packActions"
import PackCart from "../component/PackCart"

function PackCarts()
{
    const {pack_id} = useParams()
    const {state, dispatch} = useContext(CartContext)
    const carts = state[pack_id] ?? []
    const {dispatch: packDispatch} = useContext(PackContext)
    const {state: pack} = useContext(PackContext)
    const selectedPack = pack.filter(item => item._id === pack_id)[0]

    useEffect(() =>
    {
        cartActions.getCart({dispatch, pack_id})
        packActions.getPack({dispatch: packDispatch})
    }, [])

    return (
        <div>
            <div className="add-package-header-detail">
                <ComeBack/>
                <div className="add-package-header-title">{selectedPack?.name}</div>
                <div className="add-package-header-empty"/>
            </div>
            <div className="add-package-border"/>
            <div className="practice-page2-body">
                <div className="practice-page2-search">
                    <input className="practice-page2-search-detail" placeholder="Search flashcards"/>
                    <img className="practice-page2-search-img" src={search} alt="search"/>
                </div>
                {
                    carts.map(item =>
                        <PackCart key={item._id} pack_id={pack_id} data={item}/>,
                    )
                }
            </div>
        </div>
    )
}

export default PackCarts
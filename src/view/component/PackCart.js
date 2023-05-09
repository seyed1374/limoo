import edit from "../../media/Vector4.svg"
import edit2 from "../../media/edit2.svg"
import filter from "../../media/Vector7.svg"
import cartActions from "../../context/cart/cartActions"
import {useContext, useState} from "react"
import {CartContext} from "../../context/cart/cartReducer"
import URLS from "../../constant/URLS"
import {useNavigate} from "react-router-dom"

function PackCart({pack_id, data: {_id, front, back}})
{
    let navigate = useNavigate()
    const {dispatch} = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)

    function toggleModal()
    {
        setShowModal(showModal => !showModal)
    }

    function onRemove()
    {
        toggleModal()
        cartActions.deleteCart({pack_id, cart_id: _id, dispatch})
    }

    function onEdit()
    {
        toggleModal()
        navigate(URLS.updateFlashCart(pack_id, _id))
    }

    return (
        <>
            <div>
                <div className="practice-page2-flash-card">
                    <img className="practice-page2-flash-card-edit" src={edit} alt="edit" onClick={toggleModal}/>
                    <div>
                        <div className="practice-page2-flash-card-on-card">{front}</div>
                        <div className="practice-page2-flash-card-back-card">{back}</div>
                    </div>
                </div>
            </div>

            {
                showModal &&
                <>
                    <div className="practice-page2-modal-back" onClick={toggleModal}/>
                    <div className="practice-page2-modal">
                        <div className="practice-page2-modal-moving" onClick={onEdit}>
                            <img className="practice-page2-modal-editor-img" src={edit2} alt={edit}/>
                            ویرایش
                        </div>
                        <div className="practice-page2-modal-filter" onClick={onRemove}>
                            <img className="practice-page2-modal-filter-img" src={filter} alt={filter}/>
                            حذف
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default PackCart
import edit from "../../media/Vector4.svg"
import edit2 from "../../media/edit2.svg"
import filter from "../../media/Vector7.svg"
import {useContext, useState} from "react"
import URLS from "../../constant/URLS"
import {useNavigate} from "react-router-dom"
import cartImg from "../../media/Vector.svg"
import packActions from "../../context/pack/packActions"
import {PackContext} from "../../context/pack/packReducer"

function PackList({data: {_id, name, carts_count}})
{
    let navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const {dispatch} = useContext(PackContext)


    function onPackClick()
    {
        navigate(URLS.pack(_id))
    }

    function toggleModal(e)
    {
        e?.stopPropagation?.()
        setShowModal(showModal => !showModal)
    }

    function onRemove()
    {
        toggleModal()
        packActions.deletePack({pack_id:_id, dispatch})
    }

    function onEdit()
    {
        toggleModal()
        navigate(URLS.updatePack(_id))
    }

    return (
        <>
            <div className="homepage-detail-cart" onClick={onPackClick}>
                <div className="homepage-detail-cart-head">
                    {name}
                    <img className="homepage-detail-cart-edit" src={edit} alt="تغییر دادن" onClick={toggleModal}/>
                </div>
                <div className="suggest-detail-cart-desc">
                    <img className="suggest-detail-cart-desc-img" src={cartImg} alt="فلش کارت"/>
                    {carts_count}
                    <span className="suggest-detail-cart-desc-name">فلش کارت</span>
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

export default PackList
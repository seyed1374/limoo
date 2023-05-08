import ComeBack from "../component/ComeBack"
import color from "../../media/Ellipse 2.png"
import Button from "../component/Button"
import {useContext, useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import packActions from "../../context/pack/packActions"
import {PackContext} from "../../context/pack/packReducer"
import URLS from "../../constant/URLS"
import Input from "../component/input/Input"

function AddPack()
{
    let navigate = useNavigate()
    const {state: pack} = useContext(PackContext)
    const {dispatch} = useContext(PackContext)
    const [name,setName]=useState("")
    const isBtnDisable = name.length < 3
    const {_id} = useParams()
    const updatedPack = pack?.filter?.(item => item._id === _id)?.[0]



    useEffect(() =>
    {
        packActions.getPack({dispatch})
    }, [])


    function onNameChange(e){
       setName(e.target.value)
    }

    function onKeyDown(e){
        if (e.keyCode === 13)
        {
            onSubmit()
        }
    }

    function onSubmit() {
        packActions.makePack({data: {name}, dispatch})
            .then(res =>
            {
                navigate(URLS.pack(res.data.data._id))
            })
            .catch(() =>
            {
                console.log("NOK")
            })
    }

    return (
        <div className="add-package">
            <div className="add-package-header">
                <div className="add-package-header-detail">
                    <ComeBack/>
                    <div className="add-package-header-title">
                        افزودن بسته ی جدید</div>
                    <div className="add-package-header-empty"/>
                </div>
                <div className="add-package-border"/>
            </div>
            <div className="add-package-body">
                <Input
                    className="add-package-body-name-input"
                    label="نام بسته"
                    placeholder="نام بسته خود را وارد کنید"
                    onChange={onNameChange}
                    onKeyDown={onKeyDown}
                    defaultValue={updatedPack?.name}
                    name="name"
                    focusOnMount
                    showClear
                    disabled={false}
                    disableSubmit={() => console.log("fuck")}
                    onSubmit={() => console.log("ok")}
                />
                <div className="add-package-body-color">
                    <div className="add-package-body-color-title">رنگ</div>
                    <div className="add-package-body-color-img">
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                        <img className="add-package-body-color-img-detail" src={color} alt="آبی"/>
                    </div>
                </div>
            </div>
            <div className="add-package-button">
                    <Button value="افزودن" isDisable={isBtnDisable} onClick={onSubmit}/>
            </div>
        </div>
    )
}

export default AddPack
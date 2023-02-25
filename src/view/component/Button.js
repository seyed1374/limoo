
function Button({isDisable, onClick}) {

    function _onClick(){
        if (!isDisable) onClick?.()
    }

    return(
        <div className={`login-button ${isDisable ? "" : "change-btn"}`} onClick={_onClick}>ادامه</div>
    )
}

export default Button
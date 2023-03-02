
function Button({isDisable, onClick,value }) {

    function _onClick(){
        if (!isDisable) onClick?.()
    }

    return(
        <div className={`login-button ${isDisable ? "" : "change-btn"}`} onClick={_onClick}>{value}</div>
    )
}

export default Button
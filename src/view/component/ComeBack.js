import flash from "../../media/Vector 2.svg"

function ComeBack() {

    function goBack() {
        window.history.back()
    }

    return(
        <img className="otp-flash-back" src={flash} alt="بازگشت" onClick={goBack}/>

    )
}

export default ComeBack
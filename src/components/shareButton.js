import {FcShare} from "react-icons/fc"
import Widget from './widget';
import {useState} from "react"

const ShareButton = ()=>{

    const [display ,setDisplay] = useState("none")

    const handleClick = ()=>{
        setDisplay("block")
    }
    console.log(display)
    return(
        <>
            <button onClick={handleClick} className="share-btn">
                Share
                &nbsp;
                <FcShare/>
            </button>
            <Widget displayProp={display}/>
        </>
    )
}

export default ShareButton;
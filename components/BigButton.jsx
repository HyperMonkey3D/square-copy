import Link from "next/link";
import buttonST from "../styles/BigButton.module.css"

const BigButton = ( { text, route, isWhite, isMid } ) => {

    const { button, buttonMid, buttonWhite, buttonMidWhite } = buttonST;

    return (
        <Link href={route}>
            {
                isWhite
                    ?
                    <a className={isMid ? buttonMidWhite : buttonWhite}>{text}</a>
                    :
                    <a className={isMid ? buttonMid : button}>{text}</a>
            }
        </Link>
    )
}

export default BigButton;
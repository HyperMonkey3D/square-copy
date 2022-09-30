import Link from "next/link";
import buttonSt from "../styles/Buton.module.css";


const Button = ( { text, route, isClass } ) => {
    const {textWeight} = buttonSt

    return (
        <Link href={`/${route}`}>
            <a className={textWeight}>{text ? text : <i className={`${isClass}`}></i>}</a>
        </Link>
    )
}

export default Button;
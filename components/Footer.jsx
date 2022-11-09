import Link from "next/link";
import footerST from "../styles/Footer.module.css"

const Footer = () => {

    const {footer, mainContainer, firstInner, secondInner, secondInnerInner, secondInnerInneri, secondInnerIcons } = footerST;

    return(
        <footer className={footer}>
            <div className={mainContainer}>
                <div className={firstInner}>
                    <h2>Start selling with Square.</h2>
                    <div>
                        <Link href={"/"}>Start a free account</Link>
                        <Link href={"/"}>Talk to our Sales team</Link>
                    </div>
                </div>
                <div className={secondInner}>
                    <div className={secondInnerInner}>
                        <h3>Stay in touch.</h3>
                        <p>Subscribe to our email list to receive advice from other business owners, support articles, tips from industry experts, and more.</p>
                        <div className={secondInnerInneri }>
                            <input type="text"/>
                            <button>Submit</button>
                        </div>
                        <small>Please refer to our Privacy Policy for more details.</small>
                    </div>
                    <div className={secondInnerIcons}>
                        <i className="bi bi-envelope"></i>
                        <i className="bi bi-send"></i>
                        <i className="bi bi-emoji-smile"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
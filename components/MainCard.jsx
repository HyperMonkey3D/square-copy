import Link from "next/link";
import cardST from "../styles/mainCard.module.css"

const MainCard = ( {content} ) => {

    const {cardContainer,
        ulContainer,
        img,
        cardInner,
        imgContainer,
        mainCard} = cardST;

    const {title, message, links, links_title, tags, image} = content
    return(
        <div className={mainCard}>
            <div className={cardContainer}>
                <div className={cardInner}>
                    <h3>{title}</h3>
                    <p>{message}</p>
                    <Link href={`/${links}`}>{links_title}</Link>
                    <div className={ulContainer}>
                        <ul>
                            {
                                tags
                                    .map((item, index) => {
                                        return(
                                            <li key={index}>{item}</li>
                                        )
                                    })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className={imgContainer}>
                <img src={image} alt="" className={img}/>
            </div>
        </div>
    )
}

export default MainCard;
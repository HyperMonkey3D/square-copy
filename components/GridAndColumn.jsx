import {solutions} from "../utils/content";
import gridST from "../styles/gridandcolumn.module.css";
import {useEffect, useState} from "react";

const GridAndColumn = () => {

    const {imgs, imgContainer, generalContainer, mainContainer, p, h3, focus, iconAnimation, iconsSection} = gridST;
    const [isIndex, setIsIndex] = useState(0);

    const effect = () => {

    }

    /*useEffect(() => {
        console.log("is index", isIndex)
    }, [isIndex]);*/

    return(
        <div className={generalContainer}>
            {
                solutions
                    .map((item, index) => {
                        const {title, message, img} = item;
                        return(
                            <div key={index} className={mainContainer}
                                 onMouseEnter={()=>setIsIndex(index)}
                            >
                                <div>
                                    <div className={iconsSection}>
                                        <h3 className={index === isIndex ? focus : h3}>{title}</h3>
                                        <div className={index === isIndex && iconAnimation}>
                                            <i className={"bi bi-arrow-right-short"}></i>
                                        </div>
                                    </div>
                                    <div className={p}>
                                        <p>{message}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    )
            }
            <div className={imgContainer}>
                {
                    solutions
                        .filter((item, index) => index === isIndex)
                        .map((item, index) => {
                            const {img} = item;
                            return(
                                <div key={index}>
                                    <img key={index} src={img} alt="" className={imgs}/>
                                </div>
                            )
                        })
                }
            </div>
        </div>

    )
}

export default GridAndColumn;
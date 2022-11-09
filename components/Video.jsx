import videoST from "../styles/Video.module.css"
import Link from "next/link";
import {useState} from "react";

const Video = () => {

    const { mainImage,
        videoContainer,
        imgSmalCnt,
        floatMessage,
        smallFloatMessage,
        container,
        smallContainer,
        mediaContainer,
        smallimg } = videoST;

    const [isHover, setIsHover] = useState(false);

    return(
        <div>
            <div className={container}>
                <div className={floatMessage}>
                    <p>SHOP THE SETUP</p>
                </div>
                <div className={smallFloatMessage}>
                    <p>Photodom, NYC</p>
                </div>

                <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={mediaContainer}>
                    {
                        !isHover ? (
                            <>
                                <div>
                                    <img src="https://images.ctfassets.net/2d5q1td6cyxq/5YeZRkGTVMZhWlKVFaMHbn/4607d088f78c757230d4b440ea87f993/photodom-prompt-large.jpg?w=1502&h=1953&fm=webp&q=85&fit=scale" alt="" className={mainImage}/>
                                </div>
                            </>) : (
                            <>
                                <div className={videoContainer}>
                                    <iframe width="1560" height="815" src="https://www.youtube.com/embed/cCiWpqj1OiM?controls=0"
                                            title="YouTube video player" frameBorder="0"
                                            allow="autoplay;"
                                            allowFullScreen>
                                    </iframe>
                                </div>
                            </>)

                    }

                </div>
                <div className={smallContainer}>
                    <div>
                        <h2>Shop the Setup</h2>
                        <p>Go behind the scenes with retailer Photodom to see how
                            they use Square to run their Brooklyn-based photo shop.</p>
                        <small>Duration -> 3 minute, interactive video.</small>
                        <div>
                            <Link href={"/"}>Shop the setup</Link>
                        </div>
                    </div>
                    <div className={imgSmalCnt}>
                        <img src="https://images.ctfassets.net/2d5q1td6cyxq/1JUNKJOzIhZ310xvrYeA7c/9e99eba4ade61595cdc390d7e538a72d/shop-the-setup-photodom-thumbnail.jpg?w=1502&h=1127&fm=webp&q=85&fit=scale" alt="" className={smallimg}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video;
import videoST from "../styles/videomodal.module.css"
import {useEffect} from "react";

const VideoModal = ( {isOpen} ) => {
    const { container, vidButtonClose } = videoST

    return (
        <div className={container}>
            <button onClick={isOpen} className={vidButtonClose}>CLOSE</button>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/cCiWpqj1OiM"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen >
            </iframe>
        </div>
    )
}

export default VideoModal;
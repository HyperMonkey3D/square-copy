import floatST from "../styles/floatingButton.module.css"
const FloatingButton = ({text, position} ) => {

    const {container, p, wrap, textContainer} = floatST

    return (
        <div className={wrap}>
            <div className={textContainer}>
                {
                    position === "left" ? (
                        <>
                            <p className={p}>{text}</p>
                            <i className="bi bi-plus-circle"></i>
                        </>
                        ) : (
                        <>
                            <i className="bi bi-plus-circle"></i>
                            <p className={p}>{text}</p>
                        </>
                    )
                }
            </div>
            <div className={container}></div>
        </div>


    )
}

export default FloatingButton
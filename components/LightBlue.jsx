import {pricing_message} from "../utils/content";
import lightST from "../styles/lightBlue.module.css"

const LightBlue = () => {
    const { container, h2, information, inner, icons, rightContainer, containerP  } = lightST;

    return(
        <div className={container}>
            <div>
                <div className={h2}>
                    <h2>Pricing that works for you.</h2>
                </div>
                <div className={containerP}>
                    <p>Explore pricing</p>
                </div>
            </div>
            <div className={rightContainer }>
                {
                    pricing_message
                        .map((item, index) => {
                            const {title, message, icon} = item;
                            return(
                                <div key={index} className={information}>
                                    <div className={icons}>
                                        <img src={icon} alt="" />
                                    </div>

                                    <div className={inner}>
                                        <h3>{title}</h3>
                                        <p>{message}</p>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>


        </div>
    )
}

export default LightBlue;
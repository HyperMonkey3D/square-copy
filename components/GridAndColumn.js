import {solutions} from "../utils/content";
const GridAndColumn = () => {
    return(
        <div>
            {
                solutions
                    .map((item) => {
                        const {title, message, img} = item;
                        return(
                            <div>
                                <p>{title}</p>
                                <p>{message}</p>
                                <img src={img} alt=""/>
                            </div>
                        )
                        }
                    )
            }

        </div>

    )
}

export default GridAndColumn;
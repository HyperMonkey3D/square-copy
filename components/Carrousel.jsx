import {carrousel} from "../utils/content";
import carrouselST from "../styles/carrousel.module.css"
import {useEffect, useState} from "react";

const Carrousel = () => {

    const {} = carrouselST;

    const [isIndex, setIsIndex] = useState(0);
    let handle;
    let counter = 0;



    useEffect(()=> {



        if(isIndex === carrousel.length) {
            clearInterval(handle)
        } else {
            const start = () => {
                clearInterval(handle);
                handle = setInterval(count, 1000);


            }

            const count = () => {
                setIsIndex(counter++)

            }
            //start()
        }


    }, [])

    console.log("s", isIndex)

    return (

        <div >
            {

            }
            <p>placeholders</p>
        </div>
    )
}

export default Carrousel;
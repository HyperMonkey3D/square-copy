const Carrousel = () => {

    return (

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.ctfassets.net/2d5q1td6cyxq/4Uyb3lpfXMa1hUNaPofDsQ/4aac2f389cb2dcc148fea68d6584dd27/PD03519_-_Base_USEN_fluid_hero_bakery_4000px.png?w=4000&h=3390&fm=webp&q=85&fit=scale" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://images.ctfassets.net/2d5q1td6cyxq/75gI8MqYLY9LRvyv6hTREB/a2e177eb3ff691ac872e33906244f3aa/PD03519_-_Base_USEN_HPQ3_contractor_hero.png?w=4000&h=3390&fm=webp&q=85&fit=scale" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://images.ctfassets.net/2d5q1td6cyxq/52jwuEwUr6MwWbxkPPkJXW/49ea2071d27fa0ae8f356285a81722a1/PD03519_-_Base_USEN_HPQ3_salon_hero.png?w=4000&h=3390&fm=webp&q=85&fit=scale" className="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
    )
}

export default Carrousel;
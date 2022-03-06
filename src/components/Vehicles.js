
function Vehicles(props) {
    return (

        <div class="swiper-slide box">
            <img src={props.img} alt="" />
            <div class="content">
                <h3>{props.modal}</h3>
                <div class="price"> <span>price : </span>${props.price}/- </div>
                <p>
                    new
                    <span class="fas fa-circle"></span> 2021
                    <span class="fas fa-circle"></span> automatic
                    <span class="fas fa-circle"></span> {props.fuel}
                    <span class="fas fa-circle"></span> {props.speed}
                </p>
                <a href="#" class="btn">check out</a>
            </div>
        </div>
    )
}

export default Vehicles
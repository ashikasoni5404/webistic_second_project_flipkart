import React from "react";
import "./slider.css"

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="https://www.flipkart.com/">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/eae7bd669ddd2528.jpg?q=20" class="d-block w-100" alt="#" />
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="#">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ce6cc3b532e714c6.jpg?q=20" class="d-block w-100" alt="#" />
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="#">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ece413e0bec6e507.jpg?q=20" class="d-block w-100" alt="#" />
                        </a>
                    </div> <div class="carousel-item">
                        <a href="#">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ce6cc3b532e714c6.jpg?q=20" class="d-block w-100" alt="#" />
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="#">
                            <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ece413e0bec6e507.jpg?q=20" class="d-block w-100" alt="#" />
                        </a>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Slider;
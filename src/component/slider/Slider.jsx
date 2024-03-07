import React from "react";
import "./slider.css"
import foto from "../slider/sli.png";
import foto2 from "../slider/sli2.png";
import foto3 from "../slider/sli3.png"
import foto4 from "../slider/sli4.png";

const Slider = () => {
    
    return (
        <div class="">
            <div id="carouselExampleAutoplaying" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a className="" href="https://www.flipkart.com/">
                            <img  src={foto} class="sli_foto" alt="#" />
                        </a>
                    </div>
                    <div class="carousel-item active">
                        <a className="" href="https://www.flipkart.com/">
                            <img  src={foto2} class="sli_foto" alt="#" />
                        </a>
                    </div>
                    <div class="carousel-item active">
                        <a className="" href="https://www.flipkart.com/">
                            <img  src={foto3} class="sli_foto" alt="#" />
                        </a>
                    </div>
                    <div class="carousel-item active">
                        <a className="" href="https://www.flipkart.com/">
                            <img  
                            src= {foto4} class="sli_foto" alt="#" />
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
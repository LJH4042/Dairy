import React from "react";
import Header from "../components/Header";
import "../css/Home.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../image/1.png"
import image2 from "../image/2.png"
import image3 from "../image/3.png"
import image4 from "../image/4.png"
import image5 from "../image/5.png"

function Home(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

    return(
        <div>
            <div>
                <Header />
            </div>
            <div className="homeContainer">
                <div className="homeTitleGroup">
                    <h1 className="homeTitle">Our Dairy</h1>
                    <p className="homeSubTitle">-Welcome Your Story-</p>
                    <hr />
                </div>
                <div>
                    <Slider {...settings}>
                        <div>
                            <img src={image1} />
                            <h2>하나의 기록이 모여서 우리의 인생이 됩니다.</h2>
                        </div>
                        <div>
                            <img src={image2} />
                            <h2>우리의 추억을 함께 써내려 나가세요.</h2>
                        </div>
                        <div>
                            <img src={image4} />
                            <h2>나의 이야기를 공유해보세요.</h2>
                        </div>
                        <div>
                            <img src={image3} />
                            <h2>오늘 하루를 추억으로 남겨보세요.</h2>
                        </div>
                        <div>
                            <img src={image5} />
                            <h2>우리들의 이야기를 완성해 나가세요.</h2>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Home
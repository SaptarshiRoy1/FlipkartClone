import React from "react";
import Slider from "react-slick";
import { carouselImages } from "./caroueslData";
import "./carouesl.css"

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Carouesl = ()=>{
    return(
        <div className="carousel_Wrapper">
            <Slider autoplay={true} speed={500} nextArrow={<NextButton/>} prevArrow={<BackButton/>}>
                {
                    carouselImages.map((item,index)=>(
                        <div className="carousel_item" key={index}>
                            <img src={item}/>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

const NextButton=(props)=>{
    const { className, style, onClick } = props;
    return(
        <div 
        className={" carousel_btn carousel_next"} 
        style={style} 
        onClick={onClick}>
        <ArrowForwardIosIcon/>
        </div>
    )
}
const BackButton=(props)=>{
    const { className, style, onClick } = props;
    return(
        <div
        className={"  carousel_btn carousel_back"} 
        style={style} 
        onClick={onClick}>
        <ArrowBackIosNewIcon/>
        </div>
    )
}

export default Carouesl;
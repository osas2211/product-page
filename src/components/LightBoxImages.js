import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";
import thumb1 from "../images/image-product-1-thumbnail.jpg";
import thumb2 from "../images/image-product-2-thumbnail.jpg";
import thumb3 from "../images/image-product-3-thumbnail.jpg";
import thumb4 from "../images/image-product-4-thumbnail.jpg";
import prev from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";

import { useState } from 'react';

export const LightBoxImages = ()=>{
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    const [img_ , setImg]=useState(()=> img1)

    const img1_ = ()=> {
        setImg(()=> img1)
    }

    const img2_ = ()=> {
        setImg(()=> img2)
    }

    const img3_ = ()=> {
        setImg(()=> img3)
    }

    const img4_ = ()=> {
        setImg(()=> img4)
    }
    return(
        <>
            <div className="col-md-5 col-12 px-0 d-md-block d-none">
                <img src={img_} alt="" className="img-fluid border rounded-3 mb-4" />
                
                <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
                    <a href={img1} onMouseEnter={img1_} className="me-4"><img src={thumb1} alt="" className="thumb rounded-3" /></a>
                    <a href={img2} onMouseEnter={img2_} className="me-4"><img src={thumb2} alt="" className="thumb rounded-3" /></a>
                    <a href={img3} onMouseEnter={img3_} className="me-4"><img src={thumb3} alt="" className="thumb rounded-3" /></a>
                    <a href={img4} onMouseEnter={img4_} className=""><img src={thumb4} alt="" className="thumb rounded-3" /></a>
                </LightGallery>

            </div>
            <div className="col-md-5 col-12 px-0 d-md-none d-block">
                <div id="img-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={img4} className="d-block w-100" alt="" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#img-carousel" data-bs-slide="prev">
                        <img src={prev} alt="" className="prevNext rounded-circle"/>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#img-carousel" data-bs-slide="next">
                        <img src={next} alt="" className="prevNext rounded-circle"/>
                    </button>
                </div>
            </div>
        </>
    )
}
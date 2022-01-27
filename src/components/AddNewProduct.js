import cart2 from "../images/icon-cart2.svg";
import thumbnail from "../images/image-product-1-thumbnail.jpg"
import iconDelete from "../images/icon-delete.svg"
import { useState } from "react";

export const AddNewProduct = (props)=> {
    const [productNum, setProductNum] = useState(()=> 0);
    
    const reduceProductNum = (e)=>{
        e.preventDefault();
        if (productNum == 0){
            setProductNum(()=> 0)
        }
        else {
            setProductNum((prevState)=> prevState-1)
        }
    }

    const increaseProductNum = (e)=>{
        e.preventDefault();
        setProductNum((prevState)=> prevState+1)
    }
    const addtocart = (e)=>{
        e.preventDefault();
        props.setCount_(productNum);
        props.setItem([
            {
                title: "Fall limited edition sneakers",
                amount: Math.round(props.amount-((props.discount/100)*props.amount)),
                count: productNum,
                discount: props.discount,
                discountedAmount: Math.round(props.amount-((props.discount/100)*props.amount)) * productNum,
                img: thumbnail,
                icon: iconDelete,
                id: 1
            }
        ])
    }
    

    return(
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="product-num mt-4 mb-4">
                    <a href="" className="text-decoration-none fw-bold text-primary me-5" onClick={reduceProductNum}>-</a>
                    <p className="fw-bold d-inline">{productNum}</p>
                    <a href="" className="text-decoration-none fw-bold text-primary ms-5" onClick={increaseProductNum}>+</a>
                </div>
                <a href="" onClick={addtocart} className={`btn btn-primary text-light w-50 py-2 ${productNum ? 0 : "disabled"}`} ><img src={cart2} alt="" className="img-fluid mb-1 me-2"/> Add to cart</a>
            </div>
        </>
    )
}
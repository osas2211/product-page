import cart from "../images/icon-cart.svg"
import { CartModal } from "./CartModal"
import { useState } from "react"

export const CartCount = (props)=>{
    const [display, setDisplay] = useState(()=> "d-none");
    const showModal = ()=>{
        if (display=="d-none") setDisplay(()=>"d-block");
        else setDisplay(()=> "d-none");
    }
    return(
        <>
            <div className="cart d-inline-block w-25 me-4">
                <a href="#" type="button" data-bs-toggle="modal" data-bs-target="#cart-modal" onClick={showModal}><img src={cart} alt="" className="img-fluid"/></a>
                <small className={`border rounded-pill ${props.count ? 0 :"d-none"}`}>{props.count}</small>
            </div>
            <CartModal display={display} amount={props.amount} newItem={props.newItem} clearItem={props.clearItem} count={props.count}></CartModal>
            
        </>
    )
}
import reactDom from "react-dom";
import { useState } from "react";
import { CartDetails } from "./CartDetails";

export const CartModal = (props)=>{
    
    return reactDom.createPortal(
            <div className={`modal_ ${props.display}`}>
                <div className="card" >
                    <div className="card-header"><h5>Cart</h5></div>
                </div>
                <div className="card-body">
                    <div>
                        {
                            props.newItem.map((item)=>{
                                if (item.count==0) return <p key={item.id} className="fw-bold text-muted py-4 my-4 text-center">Your cart is empty.</p>

                                return <CartDetails key={item.id} clearItem={props.clearItem} img={item.img} discountedAmount={item.discountedAmount} title={item.title} count={item.count} amount={item.amount} iconDelete={item.icon}></CartDetails>
                            })
                        }
                        <a href="" className={props.newItem[0].count == 0 ? "d-none" : "d-block text-light btn btn-primary py-3 mb-3 rounded-3"}>Checkout</a>
                    </div>
                    
                </div>
            </div>, document.body
    )
}
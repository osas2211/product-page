import { LightBoxImages } from "./LightBoxImages";
import { ProductDetails } from "./ProductDetails";


export const MainContent = (props)=>{

    return(
        <div className="pt-0 pt-md-0 px-0 px-md-5 container">
            <div className="row justify-content-between align-items-center mx-0 mx-sm-5">
                <LightBoxImages></LightBoxImages>
                <ProductDetails newAmount={props.setAmount_} setItem={props.setItem} setCount__={props.setCount___}></ProductDetails>
            </div>
        </div>
    )
}
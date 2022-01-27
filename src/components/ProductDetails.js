import { AddNewProduct } from "./AddNewProduct"
import { ProductDescription } from "./ProductDescription"

export const ProductDetails = (props)=>{

    return(
        <>
            <div className="col-md-6 col-12 p-5 p-md-0">
                <ProductDescription cartAmount={props.newAmount} amount={250} discount={50}></ProductDescription>
                <AddNewProduct setItem={props.setItem} setCount_={props.setCount__} amount={250} discount={50}></AddNewProduct>
            </div>
        </>
    )
}
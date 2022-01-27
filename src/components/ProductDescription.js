export const ProductDescription = (props)=>{
    const newAmount =  Math.round(props.amount-((props.discount/100)*props.amount));
    //props.cartAmount(newAmount);
    return (
        <>
            <small className="text-primary text-uppercase fw-bold">Sneaker company</small>
            <h2 className="text-capitalize display-6 mb-4 fw-bold">Fall limited edition sneakers</h2>
            <p className="text-muted mb-4">The low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
            <h4 className="fw-bold d-flex align-items-center">${newAmount}.00 <span className="discount text-primary d-inline-block">{props.discount}%</span></h4>
            <strike className="text-muted">${props.amount}.00</strike>
        </>
    )
}
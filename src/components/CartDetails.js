

export const CartDetails = (props)=>{
    const handleClear = (e)=> {
        e.preventDefault();
        props.clearItem(()=> [{count: 0}])
    }
    return(
        <>
            <div className={`d-flex justify-content-between align-items-center mb-4`}>
                <img src={props.img} className="img-fluid border rounded-3" alt="" />
                <div>
                    <p className="text-muted mb-0 pb-0 text-capitalize">{props.title}</p>
                    <p className="text-muted my-0 py-0">${props.amount}.00 x {props.count} <span className="text-dark fw-bold">${props.discountedAmount}.00</span></p>
                </div>
                <a href="" onClick={handleClear}><img src={props.iconDelete} alt="" className="img-fluid icon-delete"/></a>
            </div>
        </>
    )
}
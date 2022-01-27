import avatar from "../images/image-avatar.png";
import { CartCount } from "./CartCount";
import { NavMenu } from "./NavMenu";
import { NavBrandToggler } from "./NavBrandToggler";

export const Nav = (props)=>{
    return (
        <nav className="nav_ navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container align-items-center justify-content-between w-100">
                <NavBrandToggler></NavBrandToggler>
                <NavMenu></NavMenu>
                
                <div className="end-nav justify-self-end d-flex align-items-center">
                    <CartCount count={props.newItem[0].count} newItem={props.newItem} clearItem={props.clearItem} amount={props.amount}></CartCount>
                    <div className="avatar img-fluid w-25 d-inline-block">
                        <a href=""><img src={avatar} alt="" className="img-fluid"/></a>
                    </div>
                </div>
            </div>

            
        </nav>
    )
}
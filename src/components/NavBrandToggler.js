import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
export const NavBrandToggler = ()=>{
    return (
        <>
            <div className="align-self-center d-flex align-items-center">
                <button className="navbar-toggler me-2 outline-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobile-nav">
                    <img src={menu} alt="" />
                </button>
                <a href="#" className="w-100"><img src={logo} alt="" className="img-fluid"/></a>
            </div>
        </>
    )
}

export const NavMenu = ()=>{
    return(
        <>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobile-nav">
                <div className="offcanvas-header">
                    <button className="btn-close text-reset" type="button" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                <ul className="navbar-nav ps-lg-0 ps-3 ms-md-5 ms-0 ">
                    <li className="nav-item"><a href="#" className="nav-link">Colletions</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Men</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Women</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                </ul>
                </div>
            </div>
        </>
    )
}
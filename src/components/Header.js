import { Nav } from "./Nav"
export const Header = (props)=>{
    return(
        <header className="mb-0 mb-md-5">
            <Nav amount={props.amount} newItem={props.newItem} clearItem={props.clearItem} newCount_ = {props.newCount}></Nav>
            <hr className="container text-muted"/>
        </header>
    )
}
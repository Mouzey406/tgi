import React from "react";
import { Link, Navigate } from "react-router-dom";
class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false, 
            navigated: false
        }
        this.navigateTo = this.navigation.bind(this);
    }
    changeState(e) {
        this.setState({menuOpen: !this.state.menuOpen})
    }
    navigation(e) {
        e.preventDefault();
        this.changeState();
        this.props.navigated(e.target.getAttribute("href"));
    }
    render() {
        // function Links({open}) {
        //     if(open) return (
        //         function Links({open}) {
        //             if(open) return (
        //                 <div><Link to="/">Home</Link><Link to="/contact">Contact</Link></div>
        //             )
        //         }
        //     )
        // }
        return(
            <div>
            <div className="flex a-i-c menu-par">
                <div className={`menu-sp ${this.state.menuOpen ? "open": null}`} onClick={(e)=>this.changeState(e)}><span></span><span></span></div>
                <h5>Menu</h5>
            </div>
            
            <div className={`links flex a-i-c ${this.state.menuOpen ? 'open' : 'falsey'}`}>
            <div><a href="./home" onClick={this.navigateTo}>Home</a><a href="./contact" onClick={this.navigateTo}>Contact</a></div>
            </div>
            </div>
        )
    }
}
export default Menu
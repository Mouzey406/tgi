import React from "react";
// import { useContext } from "react";
/************* 
 * cannot usecontext in class based components, resolve to using {context}.consumer
 ************/
import { MainTheme } from "./Themes/Theme";
class Contact extends React.Component {
    render() {

        return(
        <MainTheme.Consumer>
            {
            value => 
                    <div className={`contact ${value}`}>contact Page</div>
            }
        </MainTheme.Consumer>
        )
    }
}

export default Contact;
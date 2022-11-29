import React from "react";
import Home from "./../routes/Home";
import Contact from "./../routes/Contact"
class CurrentPage extends React.Component {
    shouldComponentUpdate(nextprops) {
        if(this.props.page === nextprops.page) return false
        return true;
    }
    render() {
        let thisPage;
    switch (this.props.page) {
      case "home":
        thisPage = <Home />;
        break;
      case "contact":
        thisPage = <Contact />;
        break;
      default:
        break;
    }
    return thisPage;
  }
}

  export default CurrentPage;
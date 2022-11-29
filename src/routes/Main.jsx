import React from "react";
import User from "../Components/UserLoggedIn";
import { MainTheme } from "./Themes/Theme";
import Menu from "../Components/Menu";
import LoginForm from "../Components/LoginForm";
import ThemeSwitcher from "../Components/ThemeSwitcher";
import CurrentPage from "../Components/CurrentPage";
import { ThemeProvider } from "@mui/material";
import { MuiTheme } from "./Themes/Theme";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loginModalOpen: false,
      page: "home",
      theme: "light",
    };
  }
  changeLoogin() {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  }
  openLoginModal() {
    this.setState({
      loginModalOpen: !this.state.loginModalOpen,
    });
    document.addEventListener("DOMContentLoaded", ()=>{
      document.getElementById("userName").focus();
    })
  }
  changeTheme() {
    let newTheme = "light";
    if (this.state.theme === "light") newTheme = "dark";
    this.setState({
      theme: newTheme,
    });
  }
  handleNavigation(e) {
    const newPath = e.slice(2);
    this.setState({
      page: newPath,
    });
    let changer = document.querySelector(".change");
    changer.classList.add("intro");
    setTimeout(() => {
      changer.classList.add("outro");
      changer.classList.remove("intro");
      setTimeout(() => {
        changer.classList.remove("outro");
      }, 700);
    }, 700);
  }
  render() {
    let theme = this.state.theme;
    return (
      <>
            <ThemeProvider theme={MuiTheme}>
        <header>
          <div className="max flex j-c-b a-i-c">
            <div className="men-u">
              <Menu navigated={(e) => this.handleNavigation(e)}></Menu>
            </div>
            <h6 className="lo-go">TGI</h6>
            <div className="t-btns">
              <div className="in-st">
                {!this.state.loggedIn ? (
                  <div>
                    {this.state.loginModalOpen ? (
                      <button
                        className="lg-m-btn"
                        onClick={() => this.openLoginModal()}
                      >
                        &times;
                      </button>
                    ) : (
                      <button onClick={() => this.openLoginModal()}>
                        Login
                      </button>
                    )}
                  </div>
                ) : (
                  <User onClick={() => this.changeLoogin()} />
                )}
              </div>
            </div>
          </div>
        </header>
        <MainTheme.Provider value={theme}>
          <CurrentPage page={this.state.page} />
          <div className="change"></div>
        </MainTheme.Provider>
        {!this.state.loggedIn ? <LoginForm
                      onLogin={() => this.changeLoogin()}
                      current={this.state.loginModalOpen}
                    /> : null}
                    <ThemeSwitcher
                  theme={this.state.theme}
                  handleTheme={() => this.changeTheme()}
                />
                </ThemeProvider>
      </>
    );
  }
}
export default App;

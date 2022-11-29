import { memo } from "react"
function ThemeSwitcher(props) {
    return (
    <>
        <button className={`theme ${props.theme}`} onClick={()=>props.handleTheme()}>
            
        </button>
        </>
    )
}

export default memo(ThemeSwitcher)
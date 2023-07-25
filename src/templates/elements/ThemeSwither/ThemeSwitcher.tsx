import './theme-switcher.scss';

export default function ThemeSwitcher () {
    const changeTheme =  () => {
        document.body.classList.contains('dark') ? 
            document.body.classList.remove('dark') :
            document.body.classList.add('dark')
        
        
    }

    return(
    <div className="theme-switch">
        <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" onClick={changeTheme}/>
        <label htmlFor="themeSwitch" className="theme-switch__label">
		    <span></span>
	    </label>
    </div>
    )
}
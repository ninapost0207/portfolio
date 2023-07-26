import './theme-switcher.scss';

export default function ThemeSwitcher ({toggleTheme}: {toggleTheme: () => void}) {
    
    
    return(
    <div className="theme-switch">
        <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" onClick={toggleTheme} 
        checked={document.body.classList.contains('dark') ? true : false}/>
        <label htmlFor="themeSwitch" className="theme-switch__label">
		    <span></span>
	    </label>
    </div>
    )
}
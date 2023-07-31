import './theme-switcher.scss';

export default function ThemeSwitcher({ toggleTheme }: { toggleTheme: () => void }) {

    return (
        <div className="theme-switch" tabIndex={0} >
            <input
                type="checkbox"
                id="themeswitch"
                name="themeSwitch"
                className="theme-switch__input"
                onChange={toggleTheme}
                checked={document.body.classList.contains('dark') ? true : false}
                aria-label='Change site theme' />
            <label htmlFor="themeswitch" className={`theme-switch__label`}>
                <span></span>
            </label>
        </div>
    )
}
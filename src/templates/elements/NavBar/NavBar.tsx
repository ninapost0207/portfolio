import { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import navData from '../../../assets/data/navData';
import './navbar.scss'

export default function NavBar () {    
    const [opened, setOpened] = useState<Boolean>(false)
    
    return (
    <nav>
        <div className="mobile">
		    <button  className={`mobile__button ${opened ? "open" : ""}`} aria-label="mobile menu" onClick={() => setOpened(!opened)}>
		    	<span></span>
		    	<span></span>
		    	<span></span>
		    </button>
		    <ul className={`nav__menu_mobile ${opened ? "opened" : ""}`}>
                {navData.map(navItem => {
                    return (
                        <li key={navItem.name}>
                            <NavLink
                                to={navItem.url}
                                className={({ isActive }) => isActive ? 'active' : ''  }>
                                {navItem.name}
                            </NavLink>                        
                        </li>
                    )
                })}
		    </ul>
	    </div>
        <div className="desktop">
	    	<ul  className="nav__menu_desktop">
                {navData.map(navItem => {
                    return (
                        <li key={navItem.name}>
                            <NavLink
                                to={navItem.url}
                                className={({ isActive }) => isActive ? 'active' : ''  }>
                                {navItem.name}
                            </NavLink>                        
                        </li>
                    )
                })}                
	    	</ul>
	    </div>        
    </nav>

    )
}




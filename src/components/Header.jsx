import { useState } from "react";
import "../styles/components/Header.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header-container">
            <header className="header">
                <div className="header__left"></div>

                <div className="header__logo">
                    <a href="/" className="nav-logo">
                        <img className="nav-logo" src="/AskendFredLogowhite.png" alt="AskendFredLogowhite" />
                    </a>
                </div>

                <div className="header__burger">
                    <button
                        className="header__burger-button shimmer fadeIn"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Open menu"
                    >
                        <i className="jki jki-burger-menu-light"></i>
                        <span className="header__burger-text">Menüü</span>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;

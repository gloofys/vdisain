import { useEffect, useState } from "react";
import "../styles/main.scss";
import "../styles/components/Header.scss";
import MenuOverlay from "./MenuOverlay";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                setScrolled(window.scrollY > 1); // or > 80 if you want a buffer
            });
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    // Optional: prevent background scroll when menu is open
    useEffect(() => {
        const { style } = document.body;
        const prev = style.overflow;
        style.overflow = menuOpen ? "hidden" : prev || "";
        return () => { style.overflow = prev; };
    }, [menuOpen]);

    return (
        <div className={`header-container ${scrolled ? "is-scrolled" : ""}`}>
            <header className="header">
                <div className="header__left" />
                <div className="header__logo">
                    <a href="/" className="nav-logo">
                        <img className="nav-logo" src="/AskendFredLogowhite.png" alt="AskendFredLogowhite" />
                    </a>
                </div>
                <div className="header__burger">
                    <button
                        className="header__burger-button shimmer fadeIn"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        aria-controls="site-menu"
                    >
                        <span className="header__burger-text">Menüü</span>
                        <i className="jki jki-burger-menu-light" aria-hidden="true" />
                    </button>
                </div>
            </header>

            {menuOpen && <MenuOverlay id="site-menu" onClose={() => setMenuOpen(false)} />}
        </div>
    );
};

export default Header;

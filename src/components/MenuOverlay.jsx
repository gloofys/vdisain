import '../styles/components/MenuOverlay.scss';


const MenuOverlay = ({ onClose }) => {
    return (
        <div className="menu-overlay">
            <div className="menu-overlay__left">
                <ul className="menu-nav">
                    <li><a href="#avaleht">Avaleht</a></li>
                    <li><a href="#teenused">Teenused</a></li>
                    <li><a href="#meist">Meist</a></li>
                    <li><a href="#referentsid">Referentsid</a></li>
                    <li><a href="#blogi">Blogi</a></li>
                    <li><a href="#kontakt">Kontakt</a></li>
                </ul>
            </div>

            <div className="menu-overlay__right">
                <button className="menu-overlay__close" onClick={onClose} aria-label="Close menu">×</button>

                <div className="contact-info">
                    <h2>VDISAIN</h2>

                    <ul className="contact-list">
                        <li>
                            <a href="mailto:info@vdisain.ee">
                    <span className="icon">
                        {/* Mail SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                        </svg>
                    </span>
                                <span className="contact-list__text">fred.brosman06@gmail.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+37256358538">
                    <span className="icon">
                        {/* Phone SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                        </svg>
                    </span>
                                <span className="contact-list__text">+37256863593</span>
                            </a>
                        </li>
                        <li>
                <span className="icon">
                    {/* Location SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                    </svg>
                </span>
                            <span className="contact-list__text">Siduri 3, 11313 Tallinn</span>
                        </li>
                    </ul>

                    <div className="social-icons">
                        <img src="/facebook.svg" alt="Facebook"/>
                        <img src="/linkedin.svg" alt="LinkedIn"/>
                        <img src="/youtube.svg" alt="YouTube"/>
                    </div>


                </div>
            </div>
        </div>
            );
            };

            export default MenuOverlay;

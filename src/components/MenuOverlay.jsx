import { useState } from 'react';
import '../styles/components/MenuOverlay.scss';

const MenuOverlay = ({ onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 600);
    };

    return (
        <div className={`menu-overlay ${isClosing ? 'closing' : ''}`}>
            <button
                className="menu-overlay__close"
                onClick={handleClose}
                aria-label="Close menu"
            >
                ×
            </button>
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


                <div className="contact-info">
                    <h2>VDISAIN</h2>

                    <ul className="contact-list">
                        <li>
                            <a href="mailto:info@vdisain.ee">
                                <span className="icon">
                                    {/* Mail SVG */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                                </svg>
                            </span>
                            <span className="contact-list__text">Siduri 3, 11313 Tallinn</span>
                        </li>
                    </ul>

                    <div className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/fred-brosman/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <svg
                                className="social-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                width="32"
                                height="32"
                                fill="currentColor"
                            >
                                <path
                                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuOverlay;

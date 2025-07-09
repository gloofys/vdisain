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
                    <p>📧 info@vdisain.ee</p>
                    <p>📞 +372 5635 8538</p>
                    <p>📍 Siduri 3, 11313 Tallinn</p>

                    <div className="social-icons">
                        {/* Replace with your actual icons or SVGs */}
                        <img src="/facebook.svg" alt="Facebook" />
                        <img src="/linkedin.svg" alt="LinkedIn" />
                        <img src="/youtube.svg" alt="YouTube" />
                    </div>

                    <p className="bold">Veebilehe haldus/hooldus</p>
                    <p>📧 info@vdisain.ee</p>
                    <p>📞 +372 5553 5611</p>
                </div>
            </div>
        </div>
    );
};

export default MenuOverlay;

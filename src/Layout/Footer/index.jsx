import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-9 col-12">
                        <ul className="footer-text">
                            <li>
                                <p className="mb-0">Klassan bir Koleksiyoner kuruluşudur. Tüm Hakları Saklıdır.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="footer-text text-end">
                            <li> <a href="mailto:teqlathemes@gmail.com."> Need Help <i className="ti ti-help"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
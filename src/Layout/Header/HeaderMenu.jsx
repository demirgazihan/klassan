import React, { useState } from 'react';
import {
    weatherData,
    initialCartItems,
    initialnotifications,
    linkData,
    headerLanguages,
    searchData
} from "../../Data/HeaderMenuData.js";
import { Link } from 'react-router-dom'
import { Card, CardBody } from "reactstrap";
import HeaderMode from "../../Layout/Header/HeaderMode.jsx";

const HeaderMenu = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleRemoveItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    };

    const [notificationsItems, setNotificationsItems] = useState(initialnotifications);

    const handleRemoveItem1 = (id) => {
        const updatedNotificationsItems = notificationsItems.filter(item => item.id !== id);
        setNotificationsItems(updatedNotificationsItems);
    };

    const [currentIcon1, setCurrentIcon1] = useState('usa');
    const [selectedLang, setSelectedLang] = useState('lang-en');

    const handleLangChange = (lang, icon) => {
        setSelectedLang(lang);
        setCurrentIcon1(icon);
    };

    const [searchTerm, setSearchTerm] = useState("");

    const filterItems = searchData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const highlightText = (text, highlight) => {
        if (!highlight) return text;
        const regex = new RegExp(`(${highlight})`, "gi");
        return text.replace(regex, `<span class="highlight-searchtext">$1</span>`);
    };


    return (
        <>
            <ul className="d-flex align-items-center">
                <li className="header-cloud">
                    <a href="#" className="head-icon" role="button" data-bs-toggle="offcanvas"
                        data-bs-target="#cloudoffcanvasTops" aria-controls="cloudoffcanvasTops">
                        <i className="ph-duotone  ph-cloud-sun text-primary f-s-26 me-1"></i>
                        <span>26 <sup className="f-s-10">°C</sup></span>
                    </a>
                    <div className="offcanvas offcanvas-end header-cloud-canvas" tabIndex="-1"
                        id="cloudoffcanvasTops" aria-labelledby="cloudoffcanvasTops">
                        <div className="offcanvas-body p-0">
                            <div className="cloud-body">
                                <div className="cloud-content-box">
                                    {weatherData.map((data, index) => (
                                        <div className={`cloud-box ${data.bgClass}`} key={index}>
                                            <p className="mb-3">{data.day}</p>
                                            <h6 className="mt-4 f-s-13">{data.temperature}</h6>
                                            <span>
                                                <i className={`ph-duotone ${data.icon} text-white f-s-25`}></i>
                                            </span>
                                            <p className="f-s-13 mt-3">
                                                <i className="wi wi-raindrop"></i> {data.rain}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="header-dark">
                    <HeaderMode />
                </li>
            </ul>
        </>
    );
};

export default HeaderMenu;
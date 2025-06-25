import React, {useEffect, useState} from 'react';
import {fontAwesomeIcons} from "@/Data/Icons/index.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const Fontawesome = () => {
    const [iconList, setIconList] = useState(fontAwesomeIcons);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (searchValue === '') {
            setIconList(fontAwesomeIcons);
        } else {
            setIconList(fontAwesomeIcons.filter(icon =>
                icon.name.toLowerCase().includes(searchValue.toLowerCase())
            ));
        }
    }, [searchValue, fontAwesomeIcons]);

    const copyIcon = (element) => {
        navigator.clipboard.writeText(`<i class="${element}"></i>`);
        Toastify({
            text: "Copied to the clipboard successfully",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "rgba(var(--success),1)",
            },
            onClick: function () {
            }
        }).showToast();
    };

    return (
        <div>
            <Container fluid >
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Fontawesome</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                                            <span>
                                                <i className="ph-duotone  ph-shapes f-s-16"></i> Icons
                                            </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Fontawesome</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <Row>
                                    <Col md={4}>
                                        <div className="search-bar app-form app-icon-form position-relative">
                                            <input
                                                type="search"
                                                className="form-control"
                                                name="search"
                                                placeholder="type to search"
                                                onChange={(e) => setSearchValue(e.target.value)}
                                            />
                                            <i className="ti ti-search text-secondary"></i>
                                        </div>
                                    </Col>
                                    <div className="col-md-8 text-end pt-2"/>
                                </Row>
                            </CardHeader>
                            <CardBody className=" d-flex justify-content-between align-items-center">
                                <ul className="icon-list space-top-icon">
                                    {iconList.map((icon, index) => (
                                        <li
                                            className="icon-box"
                                            key={index}
                                            onClick={() => copyIcon(icon.icon)}
                                        >
                                            <i className={icon.icon}></i>
                                            <strong className="mb-3">{icon.name}</strong>
                                        </li>
                                    ))}
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Fontawesome;
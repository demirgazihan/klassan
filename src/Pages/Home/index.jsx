import React, { useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row, CardFooter } from "reactstrap";

const index = () => {

    useEffect(() => {

        // 7. Autoplay Slider
        $('.autoplay-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
        // lazy slider
        $('.lazy').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            rtl: true
        });
        // fade slider
        $('.fade-s').slick({
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            slidesToShow: 1,
            rtl: true
        });








    }, []);
    return (
        <>
            <Row>
                <Col xs={12}>
                    <div>
                        <div className="loader_1 text-center" style={{ fontSize: "0.9rem" }}>
                        </div>
                    </div>
                </Col>
                <Col xs={12} style={{ padding: 0 }}>
                    <Card>
                        <div>
                            <div className="fade-s app-arrow" dir="rtl">
                                <div className="item">
                                    <img src="../assets/images/static/aden2.jpg"
                                        className="img-fluid rounded" alt="image" />
                                </div>
                                <div className="item">
                                    <img src="../assets/images/slick/fade-2.jpg"
                                        className="img-fluid rounded" alt="image" />
                                </div>
                                <div className="item" >
                                    <img src="../assets/images/slick/fade-3.jpg"
                                        className="img-fluid rounded" alt="image" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col lg={12} style={{ padding: 0 }}>
                    <Row>
                        <Col xl={12}>
                            <Card>
                                <div>
                                    <div className="autoplay-slider app-arrow">
                                        <div className="autoplay-item" style={{ maxWidth: "293px", maxHeight: "195px" }}>
                                            <img src="../assets/images/static/aden.jpeg" className="img-fluid rounded"
                                                alt="image" />
                                        </div>
                                        <div className="autoplay-item" style={{ maxWidth: "293px", maxHeight: "195px" }}>
                                            <img src="../assets/images/static/duru.JPG" className="img-fluid rounded"
                                                alt="image" />
                                        </div>
                                        <div className="autoplay-item" style={{ maxWidth: "293px", maxHeight: "195px" }}>
                                            <img src="../assets/images/static/ege.jpeg" className="img-fluid rounded"
                                                alt="image" />
                                        </div>
                                        <div className="autoplay-item" style={{ maxWidth: "293px", maxHeight: "195px" }}>
                                            <img src="../assets/images/static/ikon.jpeg" className="img-fluid rounded"
                                                alt="image" />
                                        </div>
                                        <div className="autoplay-item" style={{ maxWidth: "293px", maxHeight: "195px" }}>
                                            <img src="../assets/images/static/mia.JPG" className="img-fluid rounded"
                                                alt="image" />
                                        </div>
                                        <div className="autoplay-item" style={{ maxWidth: "293px", maxHeight: "195px" }}>
                                            <img src="../assets/images/static/nova.jpg" className="img-fluid rounded"
                                                alt="image" />
                                        </div>

                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12}>
                    <Card >
                        <CardBody >
                            <div className="lazy app-arrow text-center" dir="rtl" >
                                <div className="lazy-item" style={{ display: "flex", justifyContent: "center" }}>
                                    <Col xs={12} md={6}>
                                        <Card className="hover-effect card-secondary">
                                            <CardBody>
                                                <i className="ph-duotone ph-couch icon-bg mx-2"></i>
                                                <h6>Dilara Güreken</h6>
                                                <p>
                                                    Gokhan beye hersey için çok teşekkür ederim mobilyaların 1sene önce aldım ve sorunsuz bir şekilde bekletip bana teslim etti. Kaliteyi ucuza sunduğu için minnettarım herkese gonul rahatlığıyla alışveriş yapmasını tavsiye ederim bol satislariniz olsun🤲🧿
                                                </p>
                                                <p>
                                                    <div className="rating">
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                    </div>
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </div>
                                <div className="lazy-item" style={{ display: "flex", justifyContent: "center" }}>
                                    <Col xs={12} md={6}>
                                        <Card className="hover-effect card-success">
                                            <CardBody>
                                                <i className="ph-duotone ph-couch icon-bg mx-2"></i>
                                                <h6>
                                                    baharnaz</h6>
                                                <p>
                                                    Gökhan beye ve emeği geçen herkese ilgisi güler yüzü için öncelikle çok teşekkür ederim kaliteli ve konforlu ürünlerin tek adresi diyebilirim köşe takımımdan o kadar memnunum ki size güvenerek çok doğru bir karar vermişim
                                                </p>
                                                <p>
                                                    <div className="rating">
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                    </div>
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </div>
                                <div className="lazy-item" style={{ display: "flex", justifyContent: "center" }}>
                                    <Col xs={12} md={6}>
                                        <Card className="hover-effect card-danger">
                                            <CardBody>
                                                <i className="ph-duotone ph-couch icon-bg mx-2"></i>
                                                <h6>
                                                    Meltem Aslan</h6>
                                                <p>
                                                    Koltuklarım harika çok çok beğendim hiç tereddüt etmeden gözü kapalı alabilirsiniz ayrıca Sultan hanıma Gökhan bey'e çok çok teşekkür ederim güler yüzleri için bundan sonraki mobilyalarım Koleksiyoner Mobilya'dan elinize emeğinize sağlık👍🏼👍🏼👏👏
                                                </p>
                                                <p>
                                                    <div className="rating">
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                        <i className="ti ti-star-filled text-warning f-s-20"></i>
                                                    </div>
                                                </p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default index
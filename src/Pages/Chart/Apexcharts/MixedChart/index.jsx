import React from 'react';
import ApexCharts from "react-apexcharts";
import {getLocalStorageItem} from "@/_helper/index.js";
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const MixedChart = () => {
    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Mixed</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-chart-pie-slice f-s-16"></i> Chart
                      </span>
                                </a>
                            </li>
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        Apexcharts
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Mixed</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5> Line & Column Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'Website Blog',
                                            type: 'column',
                                            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
                                        }, {
                                            name: 'Social Media',
                                            type: 'line',
                                            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
                                        }]
                                    }
                                    type={'line'}
                                    height={350}
                                    options={{
                                        chart: {
                                            zoom: {
                                                enabled: false
                                            },
                                            height: 350,
                                            type: 'line',
                                        },
                                        stroke: {
                                            width: [0, 4]
                                        },
                                        title: {
                                            text: ''
                                        },
                                        dataLabels: {
                                            enabled: true,
                                            enabledOnSeries: [1]
                                        },
                                        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
                                        xaxis: {
                                            type: 'datetime'
                                        },

                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#FF5E40', '#F9D249'],
                                        yaxis: [{
                                            title: {
                                                text: '',
                                            },

                                        }, {
                                            opposite: true,
                                            title: {
                                                text: ''
                                            }
                                        }]
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5> Multiple Y-Axis Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'Income',
                                            type: 'column',
                                            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
                                        }, {
                                            name: 'Cashflow',
                                            type: 'column',
                                            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
                                        }, {
                                            name: 'Revenue',
                                            type: 'line',
                                            data: [20, 29, 37, 36, 44, 45, 50, 58]
                                        }]
                                    }
                                    type={'line'}
                                    height={350}
                                    options={{
                                        chart: {
                                            zoom: {
                                                enabled: false
                                            },
                                            height: 350,
                                            type: 'line',
                                            stacked: false
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        stroke: {
                                            width: [1, 1, 4]
                                        },
                                        title: {
                                            text: '',
                                            align: 'left',
                                            offsetX: 110
                                        },
                                        xaxis: {
                                            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                                        },
                                        colors: ['#AECC34', '#FF5E40', '#fbc152', '#FF5E40', '#F9D249'],
                                        yaxis: [
                                            {
                                                axisTicks: {
                                                    show: true,
                                                },
                                                axisBorder: {
                                                    show: true,
                                                    color: '#008FFB'
                                                },
                                                labels: {
                                                    style: {
                                                        colors: '#008FFB',
                                                    }
                                                },
                                                title: {
                                                    text: "",
                                                    style: {
                                                        color: '#008FFB',
                                                    }
                                                },
                                                tooltip: {
                                                    enabled: true
                                                }
                                            },
                                            {
                                                seriesName: 'Income',
                                                opposite: true,
                                                axisTicks: {
                                                    show: true,
                                                },
                                                axisBorder: {
                                                    show: true,
                                                    color: '#00E396'
                                                },
                                                labels: {
                                                    style: {
                                                        colors: '#00E396',
                                                    }
                                                },
                                                title: {
                                                    text: "",
                                                    style: {
                                                        color: '#00E396',
                                                    }
                                                },
                                            },
                                            {
                                                seriesName: 'Revenue',
                                                opposite: true,
                                                axisTicks: {
                                                    show: true,
                                                },
                                                axisBorder: {
                                                    show: true,
                                                    color: '#FEB019'
                                                },
                                                labels: {
                                                    style: {
                                                        colors: '#FEB019',
                                                    },
                                                },
                                                title: {
                                                    text: "",
                                                    style: {
                                                        color: '#FEB019',
                                                    }
                                                }
                                            },
                                        ],
                                        tooltip: {
                                            fixed: {
                                                enabled: true,
                                                position: 'topLeft',
                                                offsetY: 30,
                                                offsetX: 60
                                            },
                                        },
                                        legend: {
                                            horizontalAlign: 'left',
                                            offsetX: 40
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5> Line & Area Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'TEAM A',
                                            type: 'area',
                                            data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
                                        }, {
                                            name: 'TEAM B',
                                            type: 'line',
                                            data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
                                        }]
                                    }
                                    type={'line'}
                                    height={350}
                                    options={{
                                        chart: {
                                            zoom: {
                                                enabled: false
                                            },
                                            height: 350,
                                            type: 'line',
                                        },
                                        stroke: {
                                            curve: 'smooth'
                                        },
                                        fill: {
                                            type: 'solid',
                                            opacity: [0.35, 1],
                                        },
                                        colors: ['#8B8476', '#48443D'],
                                        labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
                                        markers: {
                                            size: 0
                                        },
                                        yaxis: [
                                            {
                                                title: {
                                                    text: '',
                                                },
                                            },
                                            {
                                                opposite: true,
                                                title: {
                                                    text: '',
                                                },
                                            },
                                        ],
                                        tooltip: {
                                            shared: true,
                                            intersect: false,
                                            y: {
                                                formatter: function (y) {
                                                    if (typeof y !== "undefined") {
                                                        return y.toFixed(0) + " points";
                                                    }
                                                    return y;
                                                }
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <h5> Line, Column & Area Chart</h5>
                            </CardHeader>
                            <CardBody>
                                <ApexCharts
                                    series={
                                        [{
                                            name: 'TEAM A',
                                            type: 'column',
                                            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                                        }, {
                                            name: 'TEAM B',
                                            type: 'area',
                                            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
                                        }, {
                                            name: 'TEAM C',
                                            type: 'line',
                                            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
                                        }]
                                    }
                                    type={'line'}
                                    height={350}
                                    options={{
                                        chart: {
                                            zoom: {
                                                enabled: false
                                            },
                                            height: 350,
                                            type: 'line',
                                            stacked: false,
                                        },
                                        stroke: {
                                            width: [0, 2, 5],
                                            curve: 'smooth'
                                        },
                                        plotOptions: {
                                            bar: {
                                                columnWidth: '50%'
                                            }
                                        },

                                        fill: {
                                            opacity: [0.85, 0.25, 1],
                                            gradient: {
                                                inverseColors: false,
                                                shade: 'light',
                                                type: "vertical",
                                                opacityFrom: 0.85,
                                                opacityTo: 0.55,
                                                stops: [0, 100, 100, 100]
                                            }
                                        },
                                        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                                            '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
                                        ],
                                        markers: {
                                            size: 0
                                        },
                                        xaxis: {
                                            type: 'datetime'
                                        },

                                        colors: [getLocalStorageItem('color-primary', '#48BECE'), getLocalStorageItem('color-secondary', '#8B8476'), '#AECC34', '#457ffc',],
                                        yaxis: {
                                            title: {
                                                text: '',
                                            },
                                            min: 0
                                        },
                                        tooltip: {
                                            shared: true,
                                            intersect: false,
                                            y: {
                                                formatter: function (y) {
                                                    if (typeof y !== "undefined") {
                                                        return y.toFixed(0) + " points";
                                                    }
                                                    return y;

                                                }
                                            }
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MixedChart;
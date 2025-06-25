import React, {useState} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Container, Row, Table} from "reactstrap";


const EShopOrderDetails = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            productName: "Men's Sports Shoes",
            productImage: "/assets/images/ecommerce/11.jpg",
            color: "White",
            size: "Small",
            status: "CANCELLED",
            price: "$452.00",
            orderDate: "5 Apr,2024 6:05 PM",
            quantity: 3,
            rating: 2,
        },
        {
            id: 2,
            productName: "Watch",
            productImage: "/assets/images/ecommerce/18.jpg",
            color: "Black",
            size: "XL",
            status: "DELIVERED",
            price: "$988.00",
            orderDate: "5 Sep,2024 5:11 PM",
            quantity: 2,
            rating: 2,
        },
        {
            id: 3,
            productName: "T-shirt",
            productImage: "/assets/images/ecommerce/19.jpg",
            color: "Green",
            size: "Medium",
            status: "PICKUPS",
            price: "$452.00",
            orderDate: "15 Oct,2024 1:51 PM",
            quantity: 3,
            rating: 3,
        },
        {
            id: 4,
            productName: "Shoes for Men",
            productImage: "/assets/images/ecommerce/28.jpg",
            color: "Black",
            size: "Small",
            status: "DELIVERED",
            price: "$400.00",
            orderDate: "19 Oct,2024 6:55 PM",
            quantity: 1,
            rating: 3,
        },
    ]);

    const handleDelete = (id) => {
        const updatedOrders = orders.filter((order) => order.id !== id);
        setOrders(updatedOrders); // Update the state to remove the deleted order
    };
    return (
        <div>
            <Container fluid>
                <Row className="m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Orders Details</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-stack f-s-16"></i> Apps
                      </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="f-s-14 f-w-500">E-shop</a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Orders Details</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="order-details">
                    <Col xxl={9}>
                        <Row>
                            <Col lg={4}>
                                <Card className="order-details-card">
                                    <CardHeader>
                                        <h5 className="text-nowrap">Order Details (#12311)</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="d-flex justify-content-between">
                                            <h6 className="f-w-600 text-dark"><i
                                                className="ti ti-calendar f-s-18 me-2 text-secondary"></i>Date</h6>
                                            <div className="text-end">
                                                <p>01/1/2024</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <h6 className="f-w-600 text-dark"><i
                                                className="ti ti-credit-card f-s-18 me-2"></i>Payment</h6>
                                            <div className="text-end">
                                                <p>Online</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <h6 className="f-w-600 text-dark"><i
                                                className="ti ti-truck-delivery f-s-18 me-2"></i>Shipping</h6>
                                            <div className="text-end">
                                                <p> Fast Shipping</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={4}>
                                <Card className="order-details-card">
                                    <CardHeader>
                                        <h5>Customer Details</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="d-flex justify-content-between">
                                            <h6 className="f-w-600 text-dark"><i
                                                className="ti ti-file-invoice text-secondary f-s-18 me-2"></i>Customer
                                            </h6>
                                            <div className="text-end">
                                                <p>Chris Coyier</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <h6 className="f-w-600 text-dark"><i
                                                className="ti ti-mail f-s-18 text-secondary me-2"></i>Email</h6>
                                            <div className="text-end">
                                                <p>dam@1234.com</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <h6 className="f-w-600 text-dark"><i
                                                className="ti ti-device-mobile f-s-18 text-secondary me-2"></i>contact
                                            </h6>
                                            <div className="text-end">
                                                <p>+1 111 134 111</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={4}>
                                <Card className="order-details-card">
                                    <CardHeader>
                                        <h5>Documents</h5>
                                    </CardHeader>
                                    <CardBody>
                                        <div className="d-flex justify-content-between">
                                            <h6 className="f-w-600 text-dark"><i
                                                className="ti ti-file-invoice text-secondary f-s-18 text-secondary me-2"></i>Invoice
                                            </h6>
                                            <div className="text-end">
                                                <p> #ABC-101011</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <h6 className="f-w-600 text-dark"><i
                                                className="ti ti-truck-delivery f-s-18 text-secondary me-2"></i>Shipping
                                            </h6>
                                            <div className="text-end">
                                                <p>#AD-01009099</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <h6 className="f-w-600 text-dark"><i
                                                className="ti ti-award f-s-18 text-secondary me-2"></i>Reward Points
                                            </h6>
                                            <div className="text-end">
                                                <p>100</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Card>
                            <CardHeader>
                                <h5>
                                    Order : #ACD1100897
                                </h5>
                            </CardHeader>
                            <CardBody className="p-0">
                                <div
                                    className="orders-details-datatable app-datatable-default app-scroll table-responsive">
                                    <Table className="table-bottom-border text-center align-middle mb-0">
                                        <thead>
                                        <tr>
                                            <th className="text-start">Product Details</th>
                                            <th>Status</th>
                                            <th>Price</th>
                                            <th>Order Date</th>
                                            <th>Quantity</th>
                                            <th>Rating</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {orders.map((order) => (
                                            <tr key={order.id}>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <img
                                                            src={order.productImage}
                                                            alt="product-img"
                                                            className="h-50 b-r-10"
                                                            style={{height: "50px", borderRadius: "10px"}}
                                                        />
                                                        <div className="text-start">
                                                            <h6 className="mb-0">{order.productName}</h6>
                                                            <p className="text-muted f-s-13 m-0">
                                                                Color: <span className="text-secondary">{order.color}</span>
                                                            </p>
                                                            <p className="text-muted f-s-13 m-0">
                                                                Size: <span className="text-secondary">{order.size}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                 <span className={`badge text-light-${(() => {
                                     switch (order.status) {
                                         case "CANCELLED":
                                             return "danger";
                                         case "DELIVERED":
                                             return "success";
                                         case "PICKUPS":
                                             return "info";
                                         case "RETURNS":
                                             return "secondary";
                                         default:
                                             return "light";
                                     }
                                 })()}`}>
                                      {order.status}
                                 </span>
                                                </td>
                                                <td>{order.price}</td>
                                                <td className="text-success">{order.orderDate}</td>
                                                <td>{order.quantity}</td>
                                                <td>
                                                    <div>
                                                        {[...Array(5)].map((_, i) => (
                                                            <i
                                                                key={i}
                                                                className={`ti ti-star-filled f-s-16 ${
                                                                    i < order.rating ? "text-warning" : "text-secondary"
                                                                }`}
                                                            ></i>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td>
                                                    <Button color="success" className="icon-btn b-r-4 me-2">
                                                        <i className="ti ti-edit"></i>
                                                    </Button>{" "}
                                                    <Button color="danger" className="icon-btn b-r-4"  onClick={() => handleDelete(order.id)}>
                                                        <i className="ti ti-trash"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </Table>


                                </div>
                            </CardBody>



                        </Card>

                    </Col>

                    <Col xxl={3}>
                        <Card className="equal-card">
                            <CardHeader>
                                <h5>Order Status</h5>
                            </CardHeader>
                            <CardBody>
                                <ul className="app-timeline-box">

                                    <li className="timeline-section">
                                        <div className="timeline-icon">
                          <span className="text-light-primary h-35 w-35 d-flex-center b-r-50">
                            <i className="ti ti-shopping-cart f-s-20"></i>
                          </span>
                                        </div>
                                        <div className="timeline-content bg-light-primary b-1-primary">
                                            <div
                                                className="d-flex justify-content-between align-items-center timeline-flex">
                                                <h6 className="mt-2 text-primary">Order Placed</h6>
                                                <span className="badge text-bg-primary ms-2">20 Min ago</span>
                                            </div>
                                            <p className="mt-2 text-dark">An order has been placed.</p>
                                            <p className="text-secondary">Wed, 15 Dec 2024 - 05:34PM</p>
                                        </div>
                                    </li>
                                    <li className="timeline-section">
                                        <div className="timeline-icon">
                          <span className="text-light-secondary h-35 w-35 d-flex-center b-r-50">
                            <i className="ti ti-checks f-s-20"></i>
                          </span>
                                        </div>
                                        <div className="timeline-content bg-light-secondary b-1-secondary">
                                            <div
                                                className="d-flex justify-content-between align-items-center timeline-flex">
                                                <h6 className="mt-2 text-secondary">Packed</h6>
                                                <span className="color-light">50 Min ago</span>
                                            </div>
                                            <p className="mt-2">
                                                Your Item has been picked up by courier partner
                                            </p>
                                            <p className="text-secondary">Thu, 20 Dec 2024 - 6:48AM</p>
                                            <span className="badge bg-primary-900">Design</span>{' '}
                                            <span className="badge bg-primary-900">HTML</span>
                                        </div>
                                    </li>
                                    <li className="timeline-section">
                                        <div className="timeline-icon">
                          <span className="text-light-success h-35 w-35 d-flex-center b-r-50">
                            <i className="ti ti-truck-delivery f-s-20"></i>
                          </span>
                                        </div>
                                        <div className="timeline-content bg-light-success b-1-success">
                                            <div
                                                className="d-flex justify-content-between align-items-center timeline-flex">
                                                <h6 className="mt-2 text-success">Shipping</h6>
                                                <span className="badge text-bg-success ms-2">1 hours ago</span>
                                            </div>
                                            <p className="mt-2 text-dark">
                                                Your Item has been picked up by courier partner
                                            </p>
                                            <p className="text-secondary">Thu, 20 Dec 2024 - 5:48AM</p>
                                        </div>
                                    </li>
                                    <li className="timeline-section">
                                        <div className="timeline-icon">
                          <span className="text-light-info h-35 w-35 d-flex-center b-r-50">
                            <i className="ti ti-package f-s-20"></i>
                          </span>
                                        </div>
                                        <div className="timeline-content bg-light-info b-1-info">
                                            <div
                                                className="d-flex justify-content-between align-items-center timeline-flex">
                                                <h6 className="mt-2 text-info">Delivered</h6>
                                                <span className="badge text-bg-dark ms-2">Nov 10, 14:00</span>
                                            </div>
                                            <p className="text-secondary">Mon, 26 Dec 2024 - 5:00AM</p>
                                        </div>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>



                </Row>

            </Container>
        </div>
    );
};

export default EShopOrderDetails;

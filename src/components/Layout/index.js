import './style.css';
import React from 'react';
import Header from '../Header/index';
import { Row, Col, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Layout = (props) => {
    return (
        <>
            {/* <Header />
            {props.children} */}

            <Header />
            {
                props.sidebar ?
                    <Container fluid>
                        <Row>
                            <Col md={2} className="sidebar">
                                <ul>
                                    <li><NavLink exact to={'/'}>Home</NavLink></li>
                                    <li><NavLink to={'/page'}>Page</NavLink></li>
                                    <li><NavLink to={'/category'}>Cayegory</NavLink></li>
                                    <li><NavLink to={'/products'}>Products</NavLink></li>
                                    <li><NavLink to={'/orders'}>Orders</NavLink></li>
                                </ul>
                            </Col>
                            <Col md={10} style={{ marginLeft: "auto", paddingTop: "60px" }}>
                                {props.children}
                            </Col>
                        </Row>
                    </Container>
                    :
                    props.children
            }
        </>
    );
};

export default Layout;
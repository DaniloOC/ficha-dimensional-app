import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const PageTitle = (props) => {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h2 style={{ color: "green" }}>
                            {props.children}
                        </h2>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default PageTitle;

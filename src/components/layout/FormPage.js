import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from './PageTitle';

const FormPage = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <PageTitle>
                        {props.title}
                    </PageTitle>
                </Col>
            </Row>
            <Row>
                <Col>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );
};

export default FormPage;

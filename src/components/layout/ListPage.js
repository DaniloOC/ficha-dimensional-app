import React from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
import PageTitle from "./PageTitle";

const ListPage = (props) => {

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
                <Col xs={4}>
                    <Button onClick={props.btnAdicionar}>+ Adicionar</Button>
                </Col>
                <Col xs={8} />
            </Row>
            <Row>
                <Col>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );
};

export default ListPage;

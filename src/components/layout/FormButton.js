import React from "react";
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FormButton = () => {

    const navigate = useNavigate();

    return (
        <Row>
            <Col xs={8} />
            <Col xs={2}>
                <Button variant="primary" type='submit'>
                    Salvar
                </Button>
            </Col>
            <Col xs={2}>
                <Button variant="primary" onClick={() => navigate(-1)}>
                    Cancelar
                </Button>
            </Col>
        </Row>
    );
};

export default FormButton;

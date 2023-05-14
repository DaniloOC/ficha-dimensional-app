import React, { useEffect, useState } from "react";
import { Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import InstrumentosService from "../../service/InstrumentosService";
import FormButton from "../layout/FormButton";
import FormPage from '../layout/FormPage';

const Instrumento = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [instrumento, setInstrumento] = useState([]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);
        InstrumentosService.add(formDataObj);
        navigate('/instrumentos');
    };

    useEffect(() => {
        const intrs = InstrumentosService.findById(params.id);
        console.log("intrs", intrs);
        setInstrumento(intrs);
    }, [params]);

    return (
        <Container>
            <FormPage
                title={"Cadastro de instrumento"}
            >
                <Form onSubmit={onFormSubmit}>
                    <Row>
                        <Form.Group className="mb-3" controlId="formRegistro">
                            <Form.Label>Registro</Form.Label>
                            <Form.Control type="input" placeholder="Id de Registro" value={instrumento.id} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="input" placeholder="Nome" value={instrumento.nome} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="input" placeholder="Descrição" value={instrumento.descricao} />
                        </Form.Group>
                    </Row>
                    <FormButton />
                </Form>
            </FormPage>
        </Container>
    );
};

export default Instrumento;

import React, { useEffect, useState } from "react";
import { Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import InstrumentosService from "../../service/InstrumentosService";
import FormButton from "../layout/FormButton";
import FormPage from '../layout/FormPage';

const Instrumento = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [instrumento, setInstrumento] = useState({
        id: null,
        nome: '',
        descricao: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log('Instrumento:', instrumento);
        InstrumentosService.add(instrumento)
            .then(() => setInstrumento({
                id: null,
                nome: '',
                descricao: ''
            }))
            .then(() => navigate('/instrumentos'));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInstrumento({...instrumento, ...{[name]: value}});
    };

    useEffect(() => {
        if (params.id !== undefined && params.id !== '') {
            InstrumentosService.findById(params.id)
                .then((r) => r.json())
                .then((response) => setInstrumento(response));
        }
    }, [params]);

    return (
        <Container>
            <FormPage
                title={"Cadastro de instrumento"}
            >
                <Form onSubmit={onFormSubmit}>
                    <Row>
                        <Form.Control type="hidden" name="id" value={instrumento.id} />
                        <Form.Group className="mb-3" controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="input" placeholder="Nome" name="nome" value={instrumento.nome} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="input" placeholder="Descrição" name="descricao" value={instrumento.descricao} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <FormButton />
                </Form>
            </FormPage>
        </Container>
    );
};

export default Instrumento;

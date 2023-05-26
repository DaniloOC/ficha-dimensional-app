import React, { useState, useEffect } from "react";
import { Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import MaquinasService from "../../service/MaquinasService";
import FormButton from "../layout/FormButton";
import FormPage from '../layout/FormPage';

const Maquina = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [maquina, setMaquina] = useState({
        id: null,
        nome: '',
        descricao: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log('Maquina:', maquina);
        MaquinasService.add(maquina)
            .then(() => setMaquina({
                id: null,
                nome: '',
                descricao: ''
            }))
            .then(() => navigate('/maquinas'));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMaquina({...maquina, ...{[name]: value}});
    };

    useEffect(() => {
        if (params.id !== undefined && params.id !== '') {
            MaquinasService.findById(params.id)
                .then((r) => r.json())
                .then((response) => setMaquina(response));
        }
    }, [params]);

    return (
        <Container>
            <FormPage
                title={"Cadastro de máquinas"}
            >
                <Form onSubmit={onFormSubmit}>
                    <Row>
                        <Form.Control type="hidden" name="id" value={maquina.id} />
                        <Form.Group className="mb-3" controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="input" placeholder="Nome" name="nome" value={maquina.nome} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="input" placeholder="Descrição" name="descricao" value={maquina.descricao} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <FormButton />
                </Form>
            </FormPage>
        </Container>
    );
};

export default Maquina;

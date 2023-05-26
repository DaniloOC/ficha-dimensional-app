import React, { useEffect, useState } from "react";
import { Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import SetoresService from "../../service/SetoresService";
import FormButton from "../layout/FormButton";
import FormPage from '../layout/FormPage';

const Setor = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [setor, setSetor] = useState({
        id: null,
        nome: '',
        descricao: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log('Setor:', setor);
        SetoresService.add(setor)
            .then(() => setSetor({
                id: null,
                nome: '',
                descricao: ''
            }))
            .then(() => navigate('/setores'));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSetor({...setor, ...{[name]: value}});
    };

    useEffect(() => {
        if (params.id !== undefined && params.id !== '') {
            SetoresService.findById(params.id)
                .then((r) => r.json())
                .then((response) => setSetor(response));
        }
    }, [params]);

    return (
        <Container>
            <FormPage
                title={"Cadastro de setor"}
            >
                <Form onSubmit={onFormSubmit}>
                    <Row>
                        <Form.Control type="hidden" name="id" value={setor.id} />
                        <Form.Group className="mb-3" controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="input" placeholder="Nome" name="nome" value={setor.nome} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="input" placeholder="Descrição" name="descricao" value={setor.descricao} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <FormButton />
                </Form>
            </FormPage>
        </Container>
    );
};

export default Setor;

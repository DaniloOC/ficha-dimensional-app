import React, { useState, useEffect } from "react";
import { Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import FuncionariosService from "../../service/FuncionariosService";
import FormButton from "../layout/FormButton";
import FormPage from '../layout/FormPage';

const Funcionario = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [funcionario, setFuncionario] = useState({
        id: null,
        nome: '',
        cpf: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log('Funcinario:', funcionario);
        FuncionariosService.add(funcionario)
            .then(() => setFuncionario({
                id: null,
                nome: '',
                cpf: ''
            }))
            .then(() => navigate('/funcionarios'));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFuncionario({...funcionario, ...{[name]: value}});
    };

    useEffect(() => {
        if (params.id !== undefined && params.id !== '') {
            FuncionariosService.findById(params.id)
                .then((r) => r.json())
                .then((response) => setFuncionario(response));
        }
    }, [params]);

    return (
        <Container>
            <FormPage
                title={"Cadastro de funcionários"}
            >
                <Form onSubmit={onFormSubmit}>
                    <Row>
                        <Form.Control type="hidden" name="id" value={funcionario.id} />
                        <Form.Group className="mb-3" controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="input" placeholder="Nome" name='nome' value={funcionario.nome} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="input" placeholder="CPF" name='cpf' value={funcionario.cpf} onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <FormButton />
                </Form>
            </FormPage>
        </Container>
    );
};

export default Funcionario;

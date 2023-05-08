import React, { useState, useEffect } from "react";
import { Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import FuncionariosService from "../../service/FuncionariosService";
import FormButton from "../layout/FormButton";
import FormPage from '../layout/FormPage';

const Funcionario = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [funcionario, setFuncionario] = useState([]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);
        FuncionariosService.add(formDataObj);
        navigate('/funcionarios');
    };

    useEffect(() => {
        const func = FuncionariosService.findById(params.id);
        console.log("func", func);
        setFuncionario(func);
    }, [params]);

    return (
        <Container>
            <FormPage
                title={"Cadastro de funcionários"}
            >
                <Form onSubmit={onFormSubmit}>
                    <Row>
                        <Form.Group className="mb-3" controlId="formRegistro">
                            <Form.Label>Registro</Form.Label>
                            <Form.Control type="input" placeholder="Id de Registro" name='id' value={funcionario.id} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="input" placeholder="Nome" name='nome' value={funcionario.nome} />
                        </Form.Group>
                    </Row>
                    <FormButton />
                </Form>
            </FormPage>
        </Container>
    );
};

export default Funcionario;

import React, { useEffect, useState } from "react";
import { Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import SetoresService from "../../service/SetoresService";
import FormButton from "../layout/FormButton";
import FormPage from '../layout/FormPage';

const Setor = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [setor, setSetor] = useState([]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);
        SetoresService.add(formDataObj);
        navigate('/setores');
    };

    useEffect(() => {
        const sts = SetoresService.findById(params.id);
        console.log("sts", sts);
        setSetor(sts);
    }, [params]);

    return (
        <Container>
            <FormPage
                title={"Cadastro de produtos"}
            >
                <Form onSubmit={onFormSubmit}>
                    <Row>
                        <Form.Group className="mb-3" controlId="formRegistro">
                            <Form.Label>Registro</Form.Label>
                            <Form.Control type="input" placeholder="Id de Registro" value={setor.id} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="input" placeholder="Nome" value={setor.nome} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="input" placeholder="Descrição" value={setor.descricao} />
                        </Form.Group>
                    </Row>
                    <FormButton />
                </Form>
            </FormPage>
        </Container>
    );
};

export default Setor;

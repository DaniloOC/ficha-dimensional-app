import React, { useState, useEffect } from "react";
import { Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import MaquinasService from "../../service/MaquinasService";
import FormButton from "../layout/FormButton";
import FormPage from '../layout/FormPage';

const Maquina = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [maquina, setMaquina] = useState([]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);
        MaquinasService.add(formDataObj);
        navigate('/maquinas');
    };

    useEffect(() => {
        const maq = MaquinasService.findById(params.id);
        console.log("maq", maq);
        setMaquina(maq);
    }, [params]);

    return (
        <Container>
            <FormPage
                title={"Cadastro de máquinas"}
            >
                <Form onSubmit={onFormSubmit}>
                    <Row>
                        <Form.Group className="mb-3" controlId="formRegistro">
                            <Form.Label>Registro</Form.Label>
                            <Form.Control type="input" placeholder="Id de Registro" value={maquina.id} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="input" placeholder="Nome" value={maquina.nome} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="input" placeholder="Descrição" value={maquina.descricao} />
                        </Form.Group>
                    </Row>
                    <FormButton />
                </Form>
            </FormPage>
        </Container>
    );
};

export default Maquina;

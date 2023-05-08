import React, { useState, useEffect } from "react";
import { Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import ProdutosService from "../../service/ProdutosService";
import FormButton from "../layout/FormButton";
import FormPage from '../layout/FormPage';

const Produto = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [produto, setProduto] = useState([]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);
        ProdutosService.add(formDataObj);
        navigate('/produtos');
    };

    useEffect(() => {
        const prod = ProdutosService.findById(params.id);
        console.log("prod", prod);
        setProduto(prod);
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
                            <Form.Control type="input" placeholder="Id de Registro" value={produto.id} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="input" placeholder="Nome" value={produto.nome} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="input" placeholder="Descrição" value={produto.descricao} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formQtdCotas">
                            <Form.Label>Qtd. de Cotas</Form.Label>
                            <Form.Control type="input" placeholder="Qtd. Cotas" value={produto.qtdCotas} />
                        </Form.Group>
                        <Form.Group controlId="formFileImage" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Row>
                    <FormButton />
                </Form>
            </FormPage>
        </Container>
    );
};

export default Produto;

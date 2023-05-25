import React, { useEffect, useState } from "react";
import { Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import ProdutosService from "../../service/ProdutosService";
import FormButton from "../layout/FormButton";
import FormPage from '../layout/FormPage';

const Produto = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [produto, setProduto] = useState({
        id: null,
        nome: '',
        descricao: '',
        quantidadeCotas: 0
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log('Produto:', produto);
        ProdutosService.add(produto)
            .then(() => setProduto({
                id: null,
                nome: '',
                descricao: '',
                quantidadeCotas: 0
            }))
            .then(() => navigate('/produtos'));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduto({...produto, ...{[name]: value}});
    };

    useEffect(() => {
        if (params.id !== undefined && params.id !== '') {
            ProdutosService.findById(params.id)
                .then((r) => r.json())
                .then((response) => setProduto(response));
        }
    }, [params]);

    return (
        <Container>
            <FormPage
                title={"Cadastro de produtos"}
            >
                <Form onSubmit={onFormSubmit}>
                    <Row>
                        <Form.Control type="hidden" name="id" value={produto.id} />
                        <Form.Group className="mb-3" controlId="formNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="input" placeholder="Nome" name="nome" value={produto.nome} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="input" placeholder="Descrição" name="descricao" value={produto.descricao} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formQtdCotas">
                            <Form.Label>Qtd. de Cotas</Form.Label>
                            <Form.Control type="input" placeholder="Qtd. Cotas" name="quantidadeCotas" value={produto.quantidadeCotas} onChange={handleChange} />
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

import React from 'react';
import { Form, Button } from 'react-bootstrap';


const Produtos = () => {
    return (
        <>
            <h1 style={{ color: "green" }}>
                Cadastro Produtos
            </h1>
            <Form>
                <Form.Group className="mb-3" controlId="formRegistro">
                    <Form.Label>Registro</Form.Label>
                    <Form.Control type="input" placeholder="Id de Registro" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="input" placeholder="Nome" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDescricao">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="input" placeholder="Descrição" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formQtdCotas">
                    <Form.Label>Qtd. de Cotas</Form.Label>
                    <Form.Control type="input" placeholder="Qtd. Cotas" />
                </Form.Group>
                <Form.Group controlId="formFileImage" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default Produtos;

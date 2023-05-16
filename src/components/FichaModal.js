import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from "react-bootstrap";
import MaquinasService from "../service/MaquinasService";
import SetoresService from "../service/SetoresService";
import ProdutosService from "../service/ProdutosService";

const FichaModal = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const [maquinasSelect, setMaquinasSelect] = useState([]);
    const [setoresSelect, setSetoresSelect] = useState([]);
    const [produtosSelect, setProdutosSelect] = useState([]);

    const handleClose = () => { 
        setShow(false);
        navigate('/');
    }

    const criarFicha = () => {
        navigate('/forms/ficha');
    }

    useEffect(() => {
        const maqs = [];
        MaquinasService.findAll().forEach((maq) => {
            maqs.push(<option value={maq.id}>{maq.nome}</option>);
        });
        setMaquinasSelect(maqs);

        const setores = []
        SetoresService.findAll().forEach((setor) => {
            setores.push(<option value={setor.id}>{setor.nome}</option>);
        });
        setSetoresSelect(setores);

        const produtos = []
        ProdutosService.findAll().forEach((produto) => {
            produtos.push(<option value={produto.id}>{produto.nome}</option>);
        });
        setProdutosSelect(produtos);
    }, []);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Criar Ficha Dimensional</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Turno</Form.Label>
                            <Form.Select aria-label="Turno">
                                <option value="MANHA">Manhã</option>
                                <option value="TARDE">Tarde</option>
                                <option value="NOITE">Noite</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Máquina</Form.Label>
                            <Form.Select aria-label="Máquina">
                                {maquinasSelect}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Setor</Form.Label>
                            <Form.Select aria-label="Setor">
                                {setoresSelect}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Produto</Form.Label>
                            <Form.Select aria-label="Produto">
                                {produtosSelect}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={criarFicha}>
                        Criar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default FichaModal;

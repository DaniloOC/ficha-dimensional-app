import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import MaquinasService from "../service/MaquinasService";
import ProdutosService from "../service/ProdutosService";
import SetoresService from "../service/SetoresService";

const FichaModal = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const [maquinasSelect, setMaquinasSelect] = useState([]);
    const [setoresSelect, setSetoresSelect] = useState([]);
    const [produtosSelect, setProdutosSelect] = useState([]);

    const [turnoId, setTurnoId] = useState('MANHA');
    const [maquinaId, setMaquinaId] = useState('');
    const [setorId, setSetorId] = useState('');
    const [produtoId, setProdutoId] = useState('');

    const handleClose = () => { 
        setShow(false);
        navigate('/');
    }

    const criarFicha = () => {
        navigate('/forms/ficha?turno=' + turnoId + '&maquina=' + maquinaId + "&setor=" + setorId + "&produto=" + produtoId);
    }

    useEffect(() => {
        const maqs = [];
        const maquinas = MaquinasService.findAll();
        maquinas.forEach((maq) => {
            maqs.push(<option value={maq.id}>{maq.nome}</option>);
        });
        setMaquinasSelect(maqs);
        setMaquinaId(maquinas[0].id);

        const setoresOpt = [];
        const setores = SetoresService.findAll();
        setores.forEach((setor) => {
            setoresOpt.push(<option value={setor.id}>{setor.nome}</option>);
        });
        setSetoresSelect(setoresOpt);
        setSetorId(setores[0].id);

        const produtosOpt = [];
        const produtos = ProdutosService.findAll();
        produtos.forEach((produto) => {
            produtosOpt.push(<option value={produto.id}>{produto.nome}</option>);
        });
        setProdutosSelect(produtosOpt);
        setProdutoId(produtos[0].id);
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
                            <Form.Select 
                                aria-label="Turno"
                                value={turnoId}
                                onChange={(event) => setTurnoId(event.currentTarget.value)}
                            >
                                <option value="MANHA">Manhã</option>
                                <option value="TARDE">Tarde</option>
                                <option value="NOITE">Noite</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Máquina</Form.Label>
                            <Form.Select 
                                aria-label="Máquina"
                                value={maquinaId}
                                onChange={(event) => setMaquinaId(event.currentTarget.value)}
                            >
                                {maquinasSelect}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Setor</Form.Label>
                            <Form.Select 
                                aria-label="Setor"
                                value={setorId}
                                onChange={(event) => setSetorId(event.currentTarget.value)}
                            >
                                {setoresSelect}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Produto</Form.Label>
                            <Form.Select 
                                aria-label="Produto"
                                value={produtoId}
                                onChange={(event) => setProdutoId(event.currentTarget.value)}
                            >
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

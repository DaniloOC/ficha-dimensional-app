import React, { useEffect, useState } from "react";
import { Container, Form, Row, Table } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import FichasService from "../../service/FichasService";
import FormButton from "../layout/FormButton";
import FormPage from '../layout/FormPage';

const Ficha = () => {

    const navigate = useNavigate();
    const [ficha, setFicha] = useState({});
    const [produto, setProduto] = useState({});
    const [quantidadeCotas, setQuantidadeCotas] = useState(0);
    const [cotas, setCotas] = useState([]);
    const [apontamentos, setApontamentos] = useState([]);

    const search = useLocation().search;

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        const formData = new FormData(event.target);
        const formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);
        FichasService.add(formDataObj);
        navigate('/fichas');
    };

    useEffect(() => {
        const s = new URLSearchParams(search);
        console.log('s', s);
        const turno = s.get('turno');
        const maquina = s.get('maquina');
        const setor = s.get('setor');
        const produto = s.get('produto');
        FichasService.findByTurnoMaquinaSetorProduto(turno, maquina, setor, produto)
            // .then((r) => r.json())
            .then((response) => {
                console.log('FICHA >>', response);
                setQuantidadeCotas(response.produto.qtdCotas);
                setProduto(response.produto);
                setFicha(response);

                let cotasCol = [];
                for (let i = 0; i < response.produto.qtdCotas; i++) {
                    cotasCol.push(<th>Cota {i + 1}</th>);
                }
                setCotas(cotasCol);

                let apts = [];
                response.cotas.forEach((cota, i) => {
                    let aptsCotas = [];
                    for (let i2 = 0; i2 < cota.length; i2++) {
                        aptsCotas.push(<td><Form.Control type="input" name={'cota_' + i + '_' + i2} value={cota[i2]} /></td>);
                    }
                    const rowApt = 
                        <tr>
                            <th>
                                {i + 1}
                            </th>
                            {aptsCotas}
                            <td><Form.Control type="input" name={'cotaQtd_' + i} value={''} /></td>
                            <td><Form.Control type="input" name={'cotaObs_' + i} value={''} /></td>
                        </tr>;
                    apts.push(rowApt);
                });
                setApontamentos(apts);
            });
    }, [search]);

    return (
        <Container>
            <FormPage
                title={"Ficha Dimensional"}
            >
                <Form onSubmit={onFormSubmit}>
                    <Row>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th rowSpan={3} colSpan={3}>Figura</th>
                                    <th colSpan={quantidadeCotas}>Empresa 1</th>
                                </tr>
                                <tr>
                                    <th colSpan={quantidadeCotas + 3 - 5} >Nome: {ficha.nome}</th>
                                    <th>Registro: {ficha.registro}</th>
                                    <th>Turno: {ficha.turno}</th>
                                </tr>
                                <tr>
                                    <th colSpan={(quantidadeCotas + 3 - 3) / 3}>Máquina: {ficha.maquina}</th>
                                    <th colSpan={(quantidadeCotas + 3 - 3) / 3}>Setor: {ficha.setor}</th>
                                    <th colSpan={(quantidadeCotas + 3 - 3) / 3}>Produto: {produto.nome}</th>
                                </tr>
                                <tr>
                                    <th>Hora</th>
                                    {cotas}
                                    <th>Quantidade</th>
                                    <th>Observações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {apontamentos}
                            </tbody>
                            <tfoot>
                            </tfoot>
                        </Table>
                    </Row>
                    <FormButton />
                </Form>
            </FormPage>
        </Container>
    );
};

export default Ficha;

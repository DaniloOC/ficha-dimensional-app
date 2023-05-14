import React, { useEffect, useState } from "react";
import { Container, Form, Row, Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import FichasService from "../../service/FichasService";
import FormButton from "../layout/FormButton";
import FormPage from '../layout/FormPage';

const Ficha = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [ficha, setFicha] = useState([]);
    const [quantidadeCotas, setQuantidadeCotas] = useState(0);
    const [cotas, setCotas] = useState([]);
    const [apontamentos, setApontamentos] = useState([]);

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
        const fch = FichasService.findById(params.id);
        console.log("fch", fch);
        setFicha(fch);
        setQuantidadeCotas(6);

        let cotasCol = [];
        for (let i = 0; i < quantidadeCotas; i++) {
            cotasCol.push(<td>Cota {i + 1}</td>);
        }
        setCotas(cotasCol);

        let apts = [];
        let aptsCotas = [];
        for (let i = 0; i < quantidadeCotas; i++) {
            aptsCotas.push(<td></td>);
        }
        for (let i = 0; i < 8; i++) {
            const rowApt = 
                <tr>
                    <td>
                        {i + 1}
                    </td>
                    {aptsCotas}
                    <td></td>
                    <td></td>
                </tr>;
            apts.push(rowApt);
        }
        setApontamentos(apts);
    }, [params, quantidadeCotas]);

    return (
        <Container>
            <FormPage
                title={"Ficha Dimensional"}
            >
                <Form onSubmit={onFormSubmit}>
                    <Row>
                        <Table>
                            <thead>
                                <tr>
                                    <td rowSpan={3} colSpan={3}>Figura</td>
                                    <td colSpan={quantidadeCotas}>Empresa 1</td>
                                </tr>
                                <tr>
                                    <td colSpan={quantidadeCotas + 3 - 5} >Nome</td>
                                    <td>Registro</td>
                                    <td>Turno</td>
                                </tr>
                                <tr>
                                    <td colSpan={(quantidadeCotas + 3 - 3) / 3}>Máquina</td>
                                    <td colSpan={(quantidadeCotas + 3 - 3) / 3}>Setor</td>
                                    <td colSpan={(quantidadeCotas + 3 - 3) / 3}>Produto</td>
                                </tr>
                                <tr>
                                    <td>Hora</td>
                                    {cotas}
                                    <td>Quantidade</td>
                                    <td>Observações</td>
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

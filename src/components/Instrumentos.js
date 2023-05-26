import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import GridDataView from './GridDataView';
import ListPage from "./layout/ListPage";
import InstrumentosService from "../service/InstrumentosService";

const Instrumentos = () => {

    const [instrumentos, setInstrumentos] = useState([]);
    const navigate = useNavigate();

    const btnAdicionar = () => {
        navigate('/forms/instrumento');
    }

    const header = {
        datas: [
            { name: 'id', value: 'Registro' },
            { name: 'nome', value: 'Nome' },
            { name: 'descricao', value: 'Descrição' },
            { name: 'remover', label: 'Remover', type: 'button', click: (item) => {
                console.log('remover-instrumento', item);
                InstrumentosService.remove(item.id)
                    .then((r) => console.log('Removido com sucesso!'))
                    .then(() => window.location.reload(false));
            }},
            { name: 'editar', label: 'Editar', type: 'button', click: (item) => {
                navigate('/forms/instrumento/' + item.id);
            }}
        ],
    };

    useEffect(() => {
        InstrumentosService.findAll()
            .then((r) => r.json())
            .then((response) => setInstrumentos(response));
    }, []);

    return (
        <ListPage
            title={'Instrumentos'}
            btnAdicionar={btnAdicionar}
        >
            <GridDataView
                key={'instrumentos'}
                index={'instrumentos'}
                datas={instrumentos}
                headers={header}
            />
        </ListPage>
    );
};

export default Instrumentos;

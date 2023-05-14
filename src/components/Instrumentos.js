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
                console.log('removerProduto', item);
                const index = instrumentos.findIndex(({ id }) => id === item.id);
                if (index !== -1) {
                    setInstrumentos([
                        ...instrumentos.slice(0, index),
                        ...instrumentos.slice(index + 1)
                    ]);
                }
            }},
            { name: 'editar', label: 'Editar', type: 'button', click: (item) => {
                console.log('editarsetInstrumento', item);
                navigate('/forms/instrumento/' + item.id);
            }}
        ],
    };

    useEffect(() => {
        const intrs = InstrumentosService.findAll();
        setInstrumentos(intrs);
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

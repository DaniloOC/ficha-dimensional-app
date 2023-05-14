import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import GridDataView from './GridDataView';
import ListPage from "./layout/ListPage";
import FichasService from "../service/FichasService";

const Fichas = () => {

    const [fichas, setFichas] = useState([]);
    const navigate = useNavigate();

    const btnAdicionar = () => {
        navigate('/forms/ficha');
    }

    const header = {
        datas: [
            { name: 'id', value: 'Registro' },
            { name: 'produto', value: 'Produto' },
            { name: 'data', value: 'Data', type: 'date' },
            { name: 'remover', label: 'Remover', type: 'button', click: (item) => {
                console.log('removerFuncionario', item);
                const index = fichas.findIndex(({ id }) => id === item.id);
                if (index !== -1) {
                    setFichas([
                        ...fichas.slice(0, index),
                        ...fichas.slice(index + 1)
                    ]);
                }
            }},
            { name: 'editar', label: 'Editar', type: 'button', click: (item) => {
                console.log('editarficha', item);
                navigate('/forms/ficha/' + item.id);
            }}
        ],
    };

    useEffect(() => {
        const fch = FichasService.findAll();
        setFichas(fch);
    }, []);

    return (
        <ListPage
            title={'Ficha Dimensional'}
            btnAdicionar={btnAdicionar}
        >
            <GridDataView
                key={'fichas'}
                index={'fichas'}
                datas={fichas}
                headers={header}
            />
        </ListPage>
    );
};

export default Fichas;

import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import GridDataView from './GridDataView';
import ListPage from "./layout/ListPage";
import MaquinasService from "../service/MaquinasService";

const Maquinas = () => {

    const [maquinas, setMaquinas] = useState([]);
    const navigate = useNavigate();

    const btnAdicionar = () => {
        navigate('/forms/maquina');
    }

    const header = {
        datas: [
            { name: 'id', value: 'Registro' },
            { name: 'nome', value: 'Nome' },
            { name: 'descricao', value: 'Descrição' },
            { name: 'remover', label: 'Remover', type: 'button', click: (item) => {
                const index = maquinas.findIndex(({ id }) => id === item.id);
                if (index !== -1) {
                    setMaquinas([
                        ...maquinas.slice(0, index),
                        ...maquinas.slice(index + 1)
                    ]);
                }
            }},
            { name: 'editar', label: 'Editar', type: 'button', click: (item) => {
                navigate('/forms/maquina/' + item.id);
            }}
        ],
    };

    useEffect(() => {
        const maqs = MaquinasService.findAll();
        setMaquinas(maqs);
    }, []);

    return (
        <ListPage
            title={'Máquinas'}
            btnAdicionar={btnAdicionar}
        >
            <GridDataView
                key={'maquinas'}
                index={'maquinas'}
                datas={maquinas}
                headers={header}
            />
        </ListPage>
    );
};

export default Maquinas;

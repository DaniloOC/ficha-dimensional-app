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
                console.log('remover-maquina', item);
                MaquinasService.remove(item.id)
                    .then((r) => console.log('Removido com sucesso!'))
                    .then(() => window.location.reload(false));
            }},
            { name: 'editar', label: 'Editar', type: 'button', click: (item) => {
                navigate('/forms/maquina/' + item.id);
            }}
        ],
    };

    useEffect(() => {
        MaquinasService.findAll()
            .then((r) => r.json())
            .then((response) => setMaquinas(response));
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

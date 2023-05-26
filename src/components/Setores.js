import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import GridDataView from './GridDataView';
import ListPage from "./layout/ListPage";
import SetoresService from "../service/SetoresService";

const Setores = () => {

    const [setores, setSetores] = useState([]);
    const navigate = useNavigate();

    const btnAdicionar = () => {
        navigate('/forms/setor');
    }

    const header = {
        datas: [
            { name: 'id', value: 'Registro' },
            { name: 'nome', value: 'Nome' },
            { name: 'descricao', value: 'Descrição' },
            { name: 'remover', label: 'Remover', type: 'button', click: (item) => {
                console.log('remover-setor', item);
                SetoresService.remove(item.id)
                    .then((r) => console.log('Removido com sucesso!'))
                    .then(() => window.location.reload(false));
            }},
            { name: 'editar', label: 'Editar', type: 'button', click: (item) => {
                console.log('editarSetor', item);
                navigate('/forms/setor/' + item.id);
            }}
        ],
    };

    useEffect(() => {
        SetoresService.findAll()
            .then((r) => r.json())
            .then((response) => setSetores(response));
    }, []);

    return (
        <ListPage
            title={'Setores'}
            btnAdicionar={btnAdicionar}
        >
            <GridDataView
                key={'setores'}
                index={'setores'}
                datas={setores}
                headers={header}
            />
        </ListPage>
    );
};

export default Setores;

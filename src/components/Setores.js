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
                console.log('removerProduto', item);
                const index = setores.findIndex(({ id }) => id === item.id);
                if (index !== -1) {
                    setSetores([
                        ...setores.slice(0, index),
                        ...setores.slice(index + 1)
                    ]);
                }
            }},
            { name: 'editar', label: 'Editar', type: 'button', click: (item) => {
                console.log('editarSetor', item);
                navigate('/forms/setor/' + item.id);
            }}
        ],
    };

    useEffect(() => {
        const sts = SetoresService.findAll();
        setSetores(sts);
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

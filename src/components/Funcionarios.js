import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import GridDataView from './GridDataView';
import ListPage from "./layout/ListPage";
import FuncionariosService from "../service/FuncionariosService";

const Funcionarios = () => {

    const [funcionarios, setFuncionarios] = useState([]);
    const navigate = useNavigate();

    const btnAdicionar = () => {
        navigate('/forms/funcionario');
    }

    const header = {
        datas: [
            { name: 'id', value: 'Registro' },
            { name: 'nome', value: 'Nome' },
            { name: 'cpf', value: 'CPF' },
            { name: 'remover', label: 'Remover', type: 'button', click: (item) => {
                console.log('remover-funcionario', item);
                FuncionariosService.remove(item.id)
                    .then((r) => console.log('Removido com sucesso!'))
                    .then(() => window.location.reload(false));
            }},
            { name: 'editar', label: 'Editar', type: 'button', click: (item) => {
                navigate('/forms/funcionario/' + item.id);
            }}
        ],
    };

    useEffect(() => {
        FuncionariosService.findAll()
            .then((r) => r.json())
            .then((response) => setFuncionarios(response));
    }, []);

    return (
        <ListPage
            title={'Funcionários'}
            btnAdicionar={btnAdicionar}
        >
            <GridDataView
                key={'funcionarios'}
                index={'funcionarios'}
                datas={funcionarios}
                headers={header}
            />
        </ListPage>
    );
};

export default Funcionarios;

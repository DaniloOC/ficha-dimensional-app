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
            { name: 'remover', label: 'Remover', type: 'button', click: (item) => {
                console.log('removerFuncionario', item);
                alert('Remover');
            }}
        ],
    };

    useEffect(() => {
        const funcs = FuncionariosService.findAll();
        setFuncionarios(funcs);
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

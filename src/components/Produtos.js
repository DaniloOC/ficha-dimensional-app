import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import GridDataView from './GridDataView';
import ListPage from "./layout/ListPage";
import ProdutosService from "../service/ProdutosService";

const Produtos = () => {

    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate();

    const btnAdicionar = () => {
        navigate('/forms/produto');
    }

    const header = {
        datas: [
            { name: 'id', value: 'Registro' },
            { name: 'nome', value: 'Nome' },
            { name: 'descricao', value: 'Descrição' },
            { name: 'quantidadeCotas', value: 'Qtd. de Cotas' },
            { name: 'remover', label: 'Remover', type: 'button', click: (item) => {
                console.log('removerProduto', item);
                ProdutosService.remove(item.id)
                    .then((r) => console.log('Removido com sucesso!'))
                    .then(() => window.location.reload(false));
            }},
            { name: 'editar', label: 'Editar', type: 'button', click: (item) => {
                console.log('editarProduto', item);
                navigate('/forms/produto/' + item.id);
            }}
        ],
    };

    useEffect(() => {
        ProdutosService.findAll()
            .then((r) => r.json())
            .then((response) => setProdutos(response));
    }, []);

    return (
        <ListPage
            title={'Produtos'}
            btnAdicionar={btnAdicionar}
        >
            <GridDataView
                key={'produtos'}
                index={'produtos'}
                datas={produtos}
                headers={header}
            />
        </ListPage>
    );
};

export default Produtos;

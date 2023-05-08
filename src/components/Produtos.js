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
            { name: 'qtdCotas', value: 'Qtd. de Cotas' },
            { name: 'remover', label: 'Remover', type: 'button', click: (item) => {
                console.log('removerProduto', item);
                const index = produtos.findIndex(({ id }) => id === item.id);
                if (index !== -1) {
                    setProdutos([
                        ...produtos.slice(0, index),
                        ...produtos.slice(index + 1)
                    ]);
                }
            }},
            { name: 'editar', label: 'Editar', type: 'button', click: (item) => {
                console.log('editarProduto', item);
                navigate('/forms/produto/' + item.id);
            }}
        ],
    };

    useEffect(() => {
        const prods = ProdutosService.findAll();
        setProdutos(prods);
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

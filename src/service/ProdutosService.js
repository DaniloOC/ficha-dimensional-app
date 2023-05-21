const ProdutosService = {

    produtos: [
        { 'id': 1, 'nome': 'Parafuso sextavado', descricao: 'Parafuso sextavado 10mm', qtdCotas: 6 },
        { 'id': 2, 'nome': 'Parafuso allen', descricao: 'Parafuso allen 10mm', qtdCotas: 6 },
    ],

    findAll: function () {
        return this.produtos;
    },

    add: function (produto) {
        console.log('add', produto);
        this.produtos.push(produto);
    },

    findById: function (id) {
        if (id === undefined || id === '') {
            return {};
        }
        const itens = this.produtos.filter((f) => {
            return f.id === parseInt(id);
        });
        return itens.length > 0 ? itens[0] : {};
    }

};

export default ProdutosService;

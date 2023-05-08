const ProdutosService = {

    produtos: [
        { 'id': 1, 'nome': 'Parafuso sextavado', descricao: 'Parafuso sextavado 10mm', qtdCotas: 3 },
        { 'id': 2, 'nome': 'Parafuso allen', descricao: 'Parafuso allen 10mm', qtdCotas: 3 },
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
            return null;
        }
        const itens = this.produtos.filter((f) => {
            return f.id === parseInt(id);
        });
        return itens.length > 0 ? itens[0] : null;
    }

};

export default ProdutosService;

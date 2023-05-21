const FichasService = {

    fichas: [
        { id: 1, produto: { id: 1, nome: 'Parafuso sextavado', descricao: 'Parafuso sextavado 10mm', qtdCotas: 6 }, data: '2023-05-14' },
        { id: 2, produto: { id: 2, nome: 'Parafuso allen', descricao: 'Parafuso allen 10mm', qtdCotas: 6 }, data: '2023-05-14', setor: "BATATA" },
    ],

    findAll: function () {
        return this.fichas;
    },

    add: function (ficha) {
        console.log('add', ficha);
        this.fichas.push(ficha);
    },

    findById: function (id) {
        // if (id === undefined || id === '') {
        //     return {};
        // }
        // const itens = this.fichas.filter((f) => {
        //     return f.id === parseInt(id);
        // });
        // return itens.length > 0 ? itens[0] : {};
        console.log("==>", this.fichas[1]);
        return this.fichas[1];
    },

    findByTurnoMaquinaSetorProduto: async function(turno, maquina, setor, produto) {
        const fch = this.fichas[1];

        const quantidadeCotas = fch.produto.qtdCotas;
        let csArr = new Array(8);
        for (let i = 0; i < csArr.length; i++) {
            csArr[i] = new Array(quantidadeCotas);
        }
        fch.cotas = csArr;

        return fch;
    },

};

export default FichasService;

const SetoresService = {

    setores: [
        { 'id': 1, 'nome': 'Corte', descricao: 'Corte' },
        { 'id': 2, 'nome': 'Desbaste', descricao: 'Desbaste' },
    ],

    findAll: function () {
        return this.setores;
    },

    add: function (setor) {
        console.log('add', setor);
        this.setores.push(setor);
    },

    findById: function (id) {
        if (id === undefined || id === '') {
            return null;
        }
        const itens = this.setores.filter((f) => {
            return f.id === parseInt(id);
        });
        return itens.length > 0 ? itens[0] : null;
    }

};

export default SetoresService;

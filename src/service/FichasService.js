const FichasService = {

    fichas: [
        { 'id': 1, 'produto': 'Parafuso sextavado', data: '2023-05-14' },
        { 'id': 2, 'produto': 'Parafuso allen', data: '2023-05-14' },
    ],

    findAll: function () {
        return this.fichas;
    },

    add: function (ficha) {
        console.log('add', ficha);
        this.fichas.push(ficha);
    },

    findById: function (id) {
        if (id === undefined || id === '') {
            return null;
        }
        const itens = this.fichas.filter((f) => {
            return f.id === parseInt(id);
        });
        return itens.length > 0 ? itens[0] : null;
    }

};

export default FichasService;

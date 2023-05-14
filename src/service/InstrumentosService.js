const InstrumentosService = {

    instrumentos: [
        { 'id': 1, 'nome': 'Paquímetro', descricao: 'Paquímetro Digital' },
        { 'id': 2, 'nome': 'Micrômetro', descricao: 'Micrômetro Externo' },
    ],

    findAll: function () {
        return this.instrumentos;
    },

    add: function (instrumento) {
        console.log('add', instrumento);
        this.instrumentos.push(instrumento);
    },

    findById: function (id) {
        if (id === undefined || id === '') {
            return {};
        }
        const itens = this.instrumentos.filter((f) => {
            return f.id === parseInt(id);
        });
        return itens.length > 0 ? itens[0] : {};
    }

};

export default InstrumentosService;

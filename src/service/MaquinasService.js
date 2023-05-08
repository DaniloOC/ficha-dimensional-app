const MaquinasService = {

    maquinas: [
        { 'id': 1, 'nome': 'Fresa', descricao: 'Fresadora vertical' },
        { 'id': 2, 'nome': 'Torno', descricao: 'Torno CNC' },
    ],

    findAll: function () {
        return this.maquinas;
    },

    add: function (maquina) {
        console.log('add', maquina);
        this.maquinas.push(maquina);
    },

    findById: function (id) {
        if (id === undefined || id === '') {
            return null;
        }
        const itens = this.maquinas.filter((f) => {
            return f.id === parseInt(id);
        });
        return itens.length > 0 ? itens[0] : null;
    }

};

export default MaquinasService;

const FuncionariosService = {

    funcionarios: [
        { 'id': 1, 'nome': 'João Teste 1' },
        { 'id': 2, 'nome': 'João Teste 2' }
    ],

    findAll: function () {
        return this.funcionarios;
    },

    add: function (funcionario) {
        console.log('add', funcionario);
        this.funcionarios.push(funcionario);
    },

    findById: function (id) {
        if (id === undefined || id === '') {
            return {};
        }
        const itens = this.funcionarios.filter((f) => {
            return f.id === parseInt(id);
        });
        return itens.length > 0 ? itens[0] : {};
    }

};

export default FuncionariosService;

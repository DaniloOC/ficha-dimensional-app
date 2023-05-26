const URI_API = "http://localhost:8080/api/funcionario";

const FuncionariosService = {

    findAll: function () {
        return fetch(URI_API);
    },

    add: function (funcionario) {
        console.log('add-funcionario', funcionario);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(funcionario)
        };
        return fetch(URI_API, requestOptions);
    },

    findById: function (id) {
        return fetch(URI_API + "/" + parseInt(id));
    },

    remove: function (id) {
        return fetch(URI_API + "/" + parseInt(id), { method: 'DELETE' });
    }

};

export default FuncionariosService;

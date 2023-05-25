const URI_API = "http://localhost:8080/api/produto";

const ProdutosService = {

    findAll: function () {
        return fetch(URI_API);
    },

    add: function (produto) {
        console.log('add-produto', produto);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(produto)
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

export default ProdutosService;

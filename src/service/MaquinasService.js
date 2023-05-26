const URI_API = "http://localhost:8080/api/maquina";

const MaquinasService = {

    findAll: function () {
        return fetch(URI_API);
    },

    add: function (maquina) {
        console.log('add-maquina', maquina);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(maquina)
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

export default MaquinasService;

const URI_API = "http://localhost:8080/api/setor";

const SetoresService = {

    findAll: function () {
        return fetch(URI_API);
    },

    add: function (setor) {
        console.log('add-setor', setor);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(setor)
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

export default SetoresService;

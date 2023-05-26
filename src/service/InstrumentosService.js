const URI_API = "http://localhost:8080/api/instrumento";

const InstrumentosService = {

    findAll: function () {
        return fetch(URI_API);
    },

    add: function (instrumento) {
        console.log('add-instrumento', instrumento);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(instrumento)
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

export default InstrumentosService;

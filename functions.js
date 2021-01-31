const axios = require('axios');
const functions = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    isCheck: (x) => x !== null,
    createUser: () => {
        const obj = {
            firstName : 'Raman',
            lastName: 'Krishnan'
        };
        return obj;
    },
    fetchUser: () => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => 'error');
    }

};
module.exports = functions

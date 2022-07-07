const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function(event) {
        if (this.readyState === 4) {
            if (this.status === 200) {
                callback(null, JSON.parse(this.responseText));
            } else {
                const error = new Error('Error' + url);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(`${API}/products`, (err1, data1) => {
    if (err1) {
        console.log(err1);
    } else {
        fetchData(`${API}/products/${data1[0].id}`, (err2, data2) => {
            if (err2) {
                console.log(err2);
            } else {
                fetchData(`${API}/categories/${data2?.category?.id}`, (err3, data3) => {
                    if (err3) {
                        console.log(err3);
                    } else {
                        console.log(data1[0]);
                        console.log(data2.title);
                        console.log(data3.name);
                    }
                })            
            }
        });
    }
});
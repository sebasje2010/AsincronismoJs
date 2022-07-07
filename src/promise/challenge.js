import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(url) {
  return fetch(url)
}

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then (products => {console.log(products)})
//     .then(() => {console.log('finish')})
//     .catch(err => console.log(err));

fetchData(`${API}/products`)
    .then(response => response.json())
    .then (products => {
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then (product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then (category => {
        console.log(category.name)
    })
    .catch(err => console.log(err))
    .finally(() => {console.log('finish')})
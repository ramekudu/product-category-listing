import axios  from 'axios'

export async function getPageData() {

    return await axios.get( 'http://localhost:8083/categories/categories')
        .then(function (response) {
            return response;
        })
        .catch(function (error){
            return error;
        });
}

export async function getProductData() {

    return await axios.get( 'http://localhost:8083/products/products')
        .then(function (response) {
            return response;
        })
        .catch(function (error){
            return error;
        });
}


export  function getProductData1() {

    return  axios.get( 'http://localhost:8083/products/products')
        .then(function (response) {
            return response;
        })
        .catch(function (error){
            return error;
        });
}
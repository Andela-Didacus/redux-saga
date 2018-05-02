import axios from 'axios';

export async function getPageData(url) {
    return await axios.get(url || 'https://httpbin.org/get')
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}

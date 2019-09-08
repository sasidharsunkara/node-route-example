const config = require('../config/config');
const axios = require('axios');

class PostmanAPI {

    constructor(axiosHttp, apiBaseUrl) {
        this.axiosHttp = axiosHttp || axios;
        this.apiBaseUrl = apiBaseUrl || config.profileApiBaseUrl;
    }

    async putRequest(data) {
        const url = config.config.apiBaseUrl + 'put';
        const apiHeaders = {
            'Accept': 'application/json'
        };
        let response = await this.axiosHttp.put(url, data, apiHeaders);
        return response;
    }
}

module.exports = new PostmanAPI();

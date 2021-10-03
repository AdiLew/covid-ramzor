const axios = require('axios');
const dashboardDataUrl = 'https://datadashboardapi.health.gov.il/api/queries/_batch';
const dashboardDataHeaders = {
    'Accep': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Host': 'datadashboardapi.health.gov.il',
    'Accept-Encoding': 'gzip, deflate, br',
};

const queryDashboardApi = (method, body) => {
    const options = {
        method,
        data: JSON.stringify(body),
        headers: dashboardDataHeaders
    }
    
    return axios(dashboardDataUrl, options)
        .then(res => res.data)
}


const getCityLevelCovidlData = () => {
    const body = { "requests": [{ "id": "0", "queryName": "spotlightPublic", "single": false, "parameters": {} }] };
    return queryDashboardApi('POST', body)
};

module.exports = {
    getCityLevelCovidlData
};
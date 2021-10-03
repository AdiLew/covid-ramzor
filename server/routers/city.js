const { Router } = require('express');
const CacheHandler = require('../cacheHandler');

const cahce = CacheHandler.getInstance();

const cityRouter = Router();

cityRouter.get('/data/city/:city', (req, res) => {
    const { city } = req.params;
    const cityName = decodeURI(city)

    const cityData = cahce.cityData.find(city => city.name === cityName);
    res.send(cityData);
});

cityRouter.get('/data/city', (req, res) => {
    const citiesList = cahce.cityData.map(city => city.name).sort();
    res.send(citiesList);
});

module.exports = cityRouter;
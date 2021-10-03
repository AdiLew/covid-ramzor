const { getCityLevelCovidlData } = require('../dal/datadashboardApi.dal');

let cacheHandlerInstance
const updateInterval = process.env.CACHE_UPDATE_INTERVAL || 1000*60*30;

class CacheHandler {
    constructor() {
        this.cityData = null;
        this.cityDataTimer = setInterval(this.updateCityData, updateInterval);
    };

    async init() {
        await this.updateCityData()
        return this;
    };

    async updateCityData() {
        const [cityLevelData] = await getCityLevelCovidlData();
        this.cityData = cityLevelData.data;
        console.log(`city data updated`)
    };

    static getInstance() {
        if (!cacheHandlerInstance) {
            cacheHandlerInstance = new CacheHandler();
        }

        return cacheHandlerInstance;
    }
};

module.exports = CacheHandler;
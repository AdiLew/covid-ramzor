export const getAllCities = () => fetch('/data/city')
    .then(res => res.json());

export const getCityData = (cityName) => fetch(`/data/city/${encodeURI(cityName)}`)
    .then(res => res.json());


const key = "U68vjH6Y3ImW8W47vonmJ2Jp8ZBlqdIs";

const getCity = async (city) => {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`

    const reponse = await fetch(base + query);
    const data = await reponse.json();

    return data[0];
}

const getWeather = async (id) => {

    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const reponse = await fetch(base + query);
    const data = await reponse.json();
    return data[0];
}





class Api {
    private apiKey:string = "6b70c540feba0fdeebeb7eb39708b7e7";
    public readonly getWeatherFromAPI = async (nameOfCity:string) => {
        let responseWithCityCoordByCityName:any;
        responseWithCityCoordByCityName = await fetch("https://api.openweathermap.org/data/2.5/weather" +
            `?q=${nameOfCity}&units=metric&lang=ru&appid=${this.apiKey}`, {method: "GET"});
        if (responseWithCityCoordByCityName.status !== 200) {
            console.error(`Запрос завершился с ошибкой. Код ошибки: ${responseWithCityCoordByCityName.status}`);
            return false;
        }

        let objectWithCityCoordAndName = await responseWithCityCoordByCityName.json();
        let lon:number = objectWithCityCoordAndName.coord.lon;
        let lat:number = objectWithCityCoordAndName.coord.lat;
        let responseWithWeatherData:any;
        responseWithWeatherData = await fetch("https://api.openweathermap.org/data/2.5/" +
            `onecall?lat=${lat}&lon=${lon}&exclude=hourly,` +
            `current,minutely,alerts&lang=ru&units=metric&appid=${this.apiKey}`, {method: "GET"});
        if (responseWithWeatherData.status !== 200) {
            throw new Error(`Запрос завершился с ошибкой. Код ошибки: ${responseWithWeatherData.status}`)
        }
        let objForResult:object = {
            nameOfCityForHTML : objectWithCityCoordAndName.name,
            objectWithWeatherData: await responseWithWeatherData.json(),
        };
        return objForResult;
    };
}

export default Api;
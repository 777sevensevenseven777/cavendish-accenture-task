class Provider {
  /**
   * Gets the weather for a given city
   */
  static getWeather(city) {
    return Promise.resolve(`The weather of ${city} is Cloudy`);
  }
  /**
   * Gets the weather for a given city
   */
  static getLocalCurrency(city) {
    return Promise.resolve(`The local currency of ${city} is GBP`);
  }
  /**
   * Given Longtitude and latitude, this function returns a city
   */
  static findCity(long, lat) {
    return Promise.resolve(`London`);
  }
}

Provider.findCity(0.1278, 51.5074).then((city) => {
  console.log(city);
  Provider.getWeather(city).then((weather) => {
    console.log(weather);
    Provider.getLocalCurrency(city).then((currency) => {
      console.log(`${weather}. ${currency}.`);
    });
  });
});

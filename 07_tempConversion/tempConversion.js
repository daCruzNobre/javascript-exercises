const convertToCelsius = function(tempInFahrenheit) {
  let celsiusTemp;
  celsiusTemp = 5/9 * (tempInFahrenheit - 32);
  celsiusTemp = Math.round(celsiusTemp * 10)/ 10
  return celsiusTemp;
};

const convertToFahrenheit = function(temInCelcius) {
  let fahrenheitTemp;
  fahrenheitTemp = (temInCelcius * 9/5) + 32;
  fahrenheitTemp = Math.round(fahrenheitTemp * 10)/10
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

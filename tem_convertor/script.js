function convert() {
    var temperatureInput = parseFloat(document.getElementById("temperature").value);
    var fromUnit = document.getElementById("from").value;
    var toUnit = document.getElementById("to").value;
    var result;
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      result = (temperatureInput * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
      result = temperatureInput + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      result = (temperatureInput - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
      result = (temperatureInput - 32) * 5/9 + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
      result = temperatureInput - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
      result = (temperatureInput - 273.15) * 9/5 + 32;
    } else {
      result = temperatureInput;
    }
    document.getElementById("result").value = result.toFixed(2);
  }
  
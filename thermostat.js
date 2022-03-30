class Thermostat {

  constructor() {
    this.temperature = 20;
    this.powerSavingMode = false;
    this.maxTemperature = 32;
    this.minTemperature = 10;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature < this.maxTemperature) this.temperature += 1;
  }

  down() {
    if (this.temperature > this.minTemperature) this.temperature -= 1;
  }

  reset() {
    return this.temperature = 20;
  }

  setPowerSavingMode(bool) {
    if (bool === true) {
      this.powerSavingMode = bool;
      this.maxTemperature = 25;
    } else {
      this.powerSavingMode = bool;
      this.maxTemperature = 32;
    }
  }

  status() {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }

}

module.exports = Thermostat;
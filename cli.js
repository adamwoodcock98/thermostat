const Thermostat = require('./thermostat');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const thermostat = new Thermostat;

const runThermostat = () => {
  rl.question('Enter command > ', (answer) => {
    switch (answer) {
      case "up":
        thermostat.up();
        if (thermostat.getTemperature() === thermostat.maxTemperature) {
          console.log(`Temperature is ${thermostat.getTemperature()} (maximum reached)`);
        } else {
          console.log(`Temperature is ${thermostat.getTemperature()}`);
        }
        break;
      case "down":
        thermostat.down();
        if (thermostat.getTemperature() === thermostat.minTemperature) {
          console.log(`Temperature is ${thermostat.getTemperature()} (minimum reached)`);
        } else {
          console.log(`Temperature is ${thermostat.getTemperature()}`);
        }
        break;
      case "psm on":
        thermostat.setPowerSavingMode(true);
        break;
      case "psm off":
        thermostat.setPowerSavingMode(false);
        break;
      default:
        break;
    }
    runThermostat()
  });
}

runThermostat()
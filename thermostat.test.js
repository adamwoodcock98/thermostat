const Thermostat = require('./thermostat');

describe('defaults', () => {

  const thermostat = new Thermostat;

  it('should initialise with a temperate value set to 20', () => {
    expect(thermostat.getTemperature()).toBe(20);
  })

})

describe('changes temperature', () => {

  const thermostat = new Thermostat;

  it('should increase the temperature', () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(21);
  })

  it('should decrease the temperature', () => {
    thermostat.down()
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(19);
  })

  it('should have a minimum temperature', () => {
    for (let i = 0; i < 15; i++) { thermostat.down(); }
    expect(thermostat.getTemperature()).toBe(10);
  })

  it('should reset to 20', () => {
    thermostat.reset()
    expect(thermostat.getTemperature()).toBe(20)
  })

})

describe('power saving mode', () => {

  const thermostat = new Thermostat;

  it('should return false if power saving mode is off (the default)', () => {
    expect(thermostat.powerSavingMode).toEqual(false)
  })

  it('should return true if power saving mode is on', () => {
    thermostat.setPowerSavingMode(true);
    expect(thermostat.powerSavingMode).toEqual(true)
  })
  
  it('will have a max temperature of 25', () => {
    thermostat.setPowerSavingMode(true);
    for (let i = 0; i < 10; i++) { thermostat.up(); }
    expect(thermostat.getTemperature()).toBe(25);
  })

})

describe('energy usage', () => {

  const thermostat = new Thermostat;

  it('should return low-usage if less than 18', () => {
    for (let i = 0; i < 4; i++) { thermostat.down(); }
    expect(thermostat.status()).toEqual("low-usage");
  })

  it('should return medium-usage if less than or equal to 25', () => {
    thermostat.reset()
    expect(thermostat.status()).toEqual("medium-usage");
  })

  it('should return low-usage if greater than 25', () => {
    for (let i = 0; i < 7; i++) { thermostat.up(); }
    expect(thermostat.status()).toEqual("high-usage");
  })

})
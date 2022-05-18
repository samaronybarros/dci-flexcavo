import chai from 'chai'
import { FuelStatus } from '../fuel.status'
import { checkFuelStatus } from '../threshold'

const expect = chai.expect

describe("Flexcavo checkFuelStatus", () => {
  it("Should return CRITICAL when the fuel percentage is 5%", () => {
    expect(checkFuelStatus(5)).to.equal(FuelStatus.CRITICAL)
  })

  it("Should return CRITICAL when the fuel percentage is less than 10%", () => {
    expect(checkFuelStatus(7)).to.equal(FuelStatus.CRITICAL)
  })

  it("Should return WARNING when the fuel percentage is 15%", () => {
    expect(checkFuelStatus(15)).to.equal(FuelStatus.WARNING)
  })

  it("Should return WARNING when the fuel percentage is greater or equal than 10% or less than 25%", () => {
    expect(checkFuelStatus(20)).to.equal(FuelStatus.WARNING)
  })

  it("Should return FUELED when the fuel percentage is 50%", () => {
    expect(checkFuelStatus(50)).to.equal(FuelStatus.FUELED)
  })

  it("Should return FUELED when the fuel percentage is greater or equal then 25%", () => {
    expect(checkFuelStatus(50)).to.equal(FuelStatus.FUELED)
  })
})
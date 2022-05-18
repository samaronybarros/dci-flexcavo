import { FuelStatus } from "./fuel.status"

export const checkFuelStatus = (fuelPercentage: number) => {
  if (fuelPercentage < 10) return FuelStatus.CRITICAL
  if (fuelPercentage < 25) return FuelStatus.WARNING
  if (fuelPercentage <= 100) return FuelStatus.FUELED
}
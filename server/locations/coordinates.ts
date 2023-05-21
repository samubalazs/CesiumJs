import { Coordinate } from '@/typings/coordinates'
import { getFakeResponse } from './getCoordinates'

export const getCoordinates = async (): Promise<Coordinate[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const { coordinates } = getFakeResponse()

  return coordinates
}

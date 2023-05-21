export interface CoordinatesResponse {
  coordinates: Coordinate[]
}

export interface Coordinate {
  geoNameId: number
  locationName: string
  latitude: number
  longitude: number
}

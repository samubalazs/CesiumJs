import { CoordinatesResponse } from '@/typings/coordinates'

export const getFakeResponse = (): CoordinatesResponse => {
  return {
    coordinates: [
      {
        geoNameId: 3054643,
        locationName: 'Budapest',
        latitude: 47.4986567,
        longitude: 19.0532484,
      },
      {
        geoNameId: 2935022,
        locationName: 'Dresden',
        latitude: 51.082249,
        longitude: 13.7269685,
      },
      {
        geoNameId: 5330413,
        locationName: 'Los Angeles',
        latitude: 33.9201528,
        longitude: -118.3925842,
      },
    ],
  }
}

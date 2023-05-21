import { Cartesian3, Color, Ion } from 'cesium'
import { Entity, Viewer, CameraFlyTo } from 'resium'
import { Coordinate } from '@/typings/coordinates'

export type CesiumViewProps = {
  activeLocation: Coordinate
  officeLocations: Coordinate[] | undefined
}

Ion.defaultAccessToken = process.env.NEXT_PUBLIC_CESIUM_ACCESS_TOKEN ?? ''

const CesiumView = ({ activeLocation, officeLocations }: CesiumViewProps) => {
  const { latitude: activeLatitude, longitude: activeLongitude } =
    activeLocation
  return (
    <>
      <Viewer>
        {activeLocation && (
          <CameraFlyTo
            destination={Cartesian3.fromDegrees(
              activeLongitude,
              activeLatitude,
              10000,
            )}
            duration={20}
          />
        )}
        {officeLocations &&
          officeLocations.map((location: any) => {
            return (
              <Entity
                name={location.locationName}
                position={Cartesian3.fromDegrees(
                  location.longitude,
                  location.latitude,
                  100,
                )}
                point={{ pixelSize: 20, color: Color.WHITE }}
              />
            )
          })}
      </Viewer>
    </>
  )
}

export default CesiumView

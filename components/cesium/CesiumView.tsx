import { Cartesian3, Color, Ion } from 'cesium'
import { Entity, Viewer, CameraFlyTo } from 'resium'
import { Coordinate } from '@/typings/coordinates'

export type CesiumViewProps = {
  activeLocation: Coordinate
  officeLocations: Coordinate[] | undefined
  showMap: boolean
  handleLoadFinish: (isLoading: boolean) => void
}

Ion.defaultAccessToken = process.env.NEXT_PUBLIC_CESIUM_ACCESS_TOKEN ?? ''

const CesiumView = ({
  activeLocation,
  officeLocations,
  showMap,
  handleLoadFinish,
}: CesiumViewProps) => {
  const { latitude: activeLatitude, longitude: activeLongitude } =
    activeLocation

  return (
    <>
      {showMap && officeLocations ? (
        <Viewer
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '70vh',
            width: '85vw',
          }}
        >
          {activeLocation && (
            <CameraFlyTo
              destination={Cartesian3.fromDegrees(
                activeLongitude,
                activeLatitude,
                10000,
              )}
              duration={10}
              onComplete={() => handleLoadFinish(false)}
            />
          )}
          {officeLocations &&
            officeLocations.map((location: Coordinate) => {
              return (
                <Entity
                  key={location.geoNameId}
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
      ) : (
        <div className="h-10 w-full border bg-black"></div>
      )}
    </>
  )
}

export default CesiumView

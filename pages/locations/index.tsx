import { Suspense, useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import useSWR from 'swr'
import { Coordinate } from '@/typings/coordinates'
import Button from '@/components/button/Button'
import Loading from '@/components/loading/Loading'

const CesiumView = dynamic(() => import('../../components/cesium/CesiumView'), {
  ssr: false,
})

export default function OfficeLocations() {
  const initialLocation: Coordinate = {
    geoNameId: 3054643,
    locationName: 'Budapest',
    latitude: 47.49835,
    longitude: 19.04045,
  }

  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const {
    data: officeLocations,
    error,
    isLoading,
  } = useSWR<Coordinate[] | undefined>('/api/locations', fetcher)

  const [activeLocation, setActiveLocation] =
    useState<Coordinate>(initialLocation)

  const handleSelectLocation = (geoNameId: number) => {
    if (officeLocations) {
      const selectedLocation = officeLocations.find(
        (location) => location.geoNameId === geoNameId,
      )
      setActiveLocation(selectedLocation ?? initialLocation)
    }
  }

  const [isMapLoading, setMapIsLoading] = useState(true)
  const [mapAnimating, setMapAnimating] = useState(true)

  const handleMapLoading = (isMapLoading: boolean) => {
    setMapIsLoading(false)
  }

  const handleAnimationFinish = (isAnimationFinished: boolean) => {
    setMapAnimating(false)
  }

  return (
    <div className="relative mx-auto flex max-h-[80vh] min-h-[80vh] w-[90vw] flex-col items-center justify-center gap-5 border-4 border-double border-blue-400 p-10">
      <Head>
        <link rel="stylesheet" href="cesium/Widgets/widgets.css" />
      </Head>
      {officeLocations && (
        <CesiumView
          activeLocation={activeLocation}
          officeLocations={officeLocations}
          showMap={true}
          handleMapLoading={handleMapLoading}
          handleAnimationFinish={handleAnimationFinish}
        />
      )}
      <div
        className="duration-10 h-42 max-h-42 inline-flex justify-center gap-5 rounded-md"
        role="group"
      >
        {officeLocations &&
          !isMapLoading &&
          !mapAnimating &&
          officeLocations.map((location) => (
            <Button
              key={location.geoNameId}
              displayText={location.locationName}
              handleClick={() => handleSelectLocation(location.geoNameId)}
            />
          ))}
      </div>
      {isMapLoading && <Loading />}
    </div>
  )
}

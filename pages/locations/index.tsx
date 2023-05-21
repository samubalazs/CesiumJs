import { useState } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import { Coordinate } from '@/typings/coordinates'
import Button from '@/components/button/Button'

const CesiumView = dynamic(() => import('../../components/cesium/CesiumView'), {
  ssr: false,
})

export default function OfficeLocations() {
  const { data: session } = useSession()
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

  return (
    <>
      <Head>
        <link rel="stylesheet" href="cesium/Widgets/widgets.css" />
      </Head>
      {officeLocations &&
        false && ( // remove false flag to display the map
          <CesiumView
            activeLocation={activeLocation}
            officeLocations={officeLocations}
          />
        )}
      <div className="inline-flex justify-center gap-5 rounded-md" role="group">
        {officeLocations &&
          officeLocations.map((location) => (
            <Button
              key={location.geoNameId}
              displayText={location.locationName}
              handleClick={() => handleSelectLocation(location.geoNameId)}
            />
          ))}
      </div>
    </>
  )
}

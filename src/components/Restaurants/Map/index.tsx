import React, { useEffect } from 'react'
import Background from '@junee/components/Background'
import Logo from '@junee/components/Logo'
import Header from '@junee/components/Header'
import JuneeButton from '@junee/components/Button'
import MapView, { Marker } from 'react-native-maps';
import useRestaurants from '@junee/hooks/useRestaurants'
import useMapView from '@junee/hooks/useMapView'

type Props = {
  onShowRestaurantList: () => void,
}

export default function RegisterScreen({
  onShowRestaurantList,
}: Props) {

  const { region, onRegionChange } = useMapView();
  const { restaurants, searchRestaurants } = useRestaurants();

  useEffect(() => {
    searchRestaurants();
  }, [])

  return (
    <Background>
      <Logo />
      <Header>Restaurant Map</Header>
      <MapView
        region={region}
        onRegionChange={onRegionChange}
      >
        {
          restaurants.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.latlong}
              title={marker.name}
              description={marker.description}
            />
          ))
        }
      </MapView>
      <JuneeButton
        mode="contained"
        onPress={onShowRestaurantList}
        style={{ marginTop: 24 }}
      >
        Show Restaurant List
      </JuneeButton>
    </Background>
  )
}
import React from 'react'
import Background from '@junee/components/Background'
import Header from '@junee/components/Header'
import RestaurantsMap from '@junee/components/Restaurants/Map'

type Props = {
  navigation: any
}

export default function RestaurantsMapPage({
  navigation
}: Props) {
  return (
    <Background>
      <Header>Restaurants</Header>
      <RestaurantsMap 
        onShowRestaurantList={() => navigation.replace('RestaurantsList')}
      />
    </Background>
  )
}

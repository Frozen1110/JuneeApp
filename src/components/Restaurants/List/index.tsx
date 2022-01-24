import React, { useEffect } from 'react'
import Background from '@junee/components/Background'
import Logo from '@junee/components/Logo'
import Header from '@junee/components/Header'
import JuneeButton from '@junee/components/Button'
import useRestaurants from '@junee/hooks/useRestaurants'
import RestaurantListing from './RestaurantListing'

type Props = {
  onShowRestaurantMap: () => void,
}

export default function RegisterScreen({
  onShowRestaurantMap,
}: Props) {

  const { restaurants, searchRestaurants } = useRestaurants();

  useEffect(() => {
    searchRestaurants();
  }, [])

  return (
    <Background>
      <Logo />
      <Header>Restaurant List</Header>
      {
        restaurants.map((restaurant, index) => (
          <RestaurantListing key={index} restaurant={restaurant}/>
        ))
      }
    </Background>
  )
}
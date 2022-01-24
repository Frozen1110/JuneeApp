import { useState } from 'react';
import { findRestaurants } from '@junee/api/restaurants';
import { LatLng } from 'react-native-maps';

type Restaurant = {
  latlong: LatLng,
  name: string,
  description: string,
}

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const searchRestaurants = async () => {
    const response = await findRestaurants({});
    setRestaurants(response.data);
  }

  return {
    restaurants,
    searchRestaurants,
  }
}

export default useRestaurants;
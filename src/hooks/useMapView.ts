import { useState } from 'react';
import { findRestaurants } from '@junee/api/restaurants';
import { LatLng } from 'react-native-maps';

type Restaurant = {
  latlong: LatLng,
  name: string,
  description: string,
}

const useMapView = () => {
  const [region, setRegion] = useState()

  const onRegionChange = () => {
    
  }

  return {
    region,
    onRegionChange,
  }
}

export default useMapView;
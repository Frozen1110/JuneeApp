import networkService from '@junee/api/network-service';

const { client } = networkService();

const findRestaurants = (query: any) => {
  return client.get('restaurants', query);
}

export {
  findRestaurants,
}
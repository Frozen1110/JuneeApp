import networkService from '@junee/api/network-service';

const { client } = networkService();

const findLocations = (query: any) => {
  return client.get('locations', query);
}

export {
  findLocations,
}
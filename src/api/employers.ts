import networkService from '@junee/api/network-service';

const { client } = networkService();

const findEmployers = (params: any) => {
  return client.get('employers', { params });
}

export {
  findEmployers,
}
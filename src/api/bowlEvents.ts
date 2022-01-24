import networkService from '@junee/api/network-service';

const { client } = networkService();

const recordScanEvent = (scanEvent: any) => {
  return client.post('scans', scanEvent);
}

export {
  recordScanEvent,
}
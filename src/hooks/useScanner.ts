import { useState } from 'react';
import { recordScanEvent } from '@junee/api/bowlEvents';

const useScanner = (defaultEventType: string, defaultQuantity: number) => {
  const [eventType, setEventType] = useState(defaultEventType);
  const [quantity, setQuantity] = useState(defaultQuantity);

  const record = async (locationCode: string) => {
    return await recordScanEvent({
      eventType,
      quantity,
      locationCode
    })
  }

  return {
    eventType,
    quantity,
    record
  }
}

export default useScanner;
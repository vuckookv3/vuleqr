import { useEffect, useState } from 'react';

import { VuleQRResult } from '../types';

type CallbackType = (result: VuleQRResult) => void;

type EventData = {
  data: {
    data: string;
    type: string;
    ms: number;
  } | null;
};

export function useQr(callback: CallbackType) {
  const [zbarWorker, setZbarWorker] = useState<Worker | null>(null);
  const [zxingWorker, setZxingWorker] = useState<Worker | null>(null);

  useEffect(() => {
    function createWorkers() {
      try {
        const worker1 = new Worker('vuleqr/zbarWorker.js');
        const worker2 = new Worker('vuleqr/zxingWorker.js');

        const onmessage = (alg: 'zbar' | 'zxing') => async (ev: EventData) => {
          if (ev.data !== null) {
            const result = ev.data;
            const rawcode = result.data;
            const codetype = result.type;
            const milliseconds = ev.data.ms;
            callback({ rawcode, milliseconds, alg, type: codetype });
          }
        };

        worker1.onmessage = onmessage('zbar');
        worker2.onmessage = onmessage('zxing');

        setZbarWorker(worker1);
        setZxingWorker(worker2);
      } catch (err) {
        return null;
      }
    }

    createWorkers();
  }, []);

  useEffect(() => {
    return () => {
      if (zbarWorker) zbarWorker.terminate();
      if (zxingWorker) zxingWorker.terminate();
    };
  }, [zbarWorker, zxingWorker]);

  return [zbarWorker, zxingWorker];
}

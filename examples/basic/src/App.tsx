import { useState } from 'react';

import VuleQR, { VuleQRResult } from '../../../lib';

function App() {
  const [data, setData] = useState<VuleQRResult | null>(null);

  return (
    <div className="w-full h-full">
      <div
        className="relative w-[300px] h-[400px] mx-auto"
        style={{ position: 'relative', width: 300, height: 400, marginInline: 'auto' }}
      >
        <VuleQR onCapture={(data: VuleQRResult) => setData(data)} />
        {data && (
          <code
            style={{
              display: 'block',
              width: 300,
              marginInline: 'auto',
              marginTop: 20,
              wordBreak: 'break-all',
            }}
          >
            {data.rawcode}
          </code>
        )}
      </div>
    </div>
  );
}

export default App;

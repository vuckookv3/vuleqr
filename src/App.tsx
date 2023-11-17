import { useState } from 'react';

import { QRScanner } from './components';
import { VuleQRResult } from './types';

function App() {
  const [data, setData] = useState<VuleQRResult | null>(null);
  return (
    <div className="w-full h-full">
      {/* <h1>App</h1> */}
      <div className="relative w-[300px] h-[400px] mx-auto">
        <QRScanner onCapture={(data) => setData(data)} />
        {data && <code>{data.rawcode}</code>}
      </div>
    </div>
  );
}

export default App;

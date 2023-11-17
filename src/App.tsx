import { useState } from 'react';

import { VuleQR } from './components';
import { VuleQRResult } from './types';

function App() {
  const [data, setData] = useState<VuleQRResult | null>(null);
  return (
    <div className="w-full h-full">
      {/* <h1>App</h1> */}
      <div className="relative w-[300px] h-[400px] mx-auto">
        <VuleQR onCapture={(data) => setData(data)} />
        {data && <code>{data.rawcode}</code>}
      </div>
    </div>
  );
}

export default App;

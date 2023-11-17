importScripts("wasm/zxing.js");
importScripts("wasm/koder-zxing.js");


(async () => {
  // Initialize Koder
  const koder = await new KoderZxing().initialize({wasmDirectory: "./wasm"});

  // Listen for messages from JS main thread containing raw image data
  self.addEventListener('message', event => {
    if ('width' in event.data && 'height' in event.data) {
      this.width = event.data.width;
      this.height = event.data.height;
    }

    const {data} = event.data;
    if (!data) return;

    const t0 = new Date().getTime();
    const scanResult = koder.decode(data, this.width, this.height);
    const t1 = new Date().getTime();
    if (scanResult) {
      console.log(`Zxing: Scanned in ${t1-t0} ms`);
      postMessage({
        data: scanResult.code,
        type: scanResult.type,
        ms: t1-t0
      });
    }
  });
})();
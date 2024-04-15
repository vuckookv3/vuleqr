export type VuleQRProps = {
    onCapture: (code: VuleQRResult) => void;
    crosshair?: boolean;
    beepOn?: boolean;
    scanRate?: number;
};

export type VuleQRResult = {
    rawcode: string;
    milliseconds: number;
    alg: string;
    type: string;
};
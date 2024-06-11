export type VuleQRProps = {
    onCapture: (code: VuleQRResult) => void;
    onError?: (err: Error) => void;
    crosshair?: boolean;
    beepOn?: boolean;
    scanRate?: number;
    isLoading?: (loading: boolean) => void;
};

export type VuleQRResult = {
    rawcode: string;
    milliseconds: number;
    alg: string;
    type: string;
};
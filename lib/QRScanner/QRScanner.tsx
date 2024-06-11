import './QRScanner.css';

import { useEffect, useRef, useState } from 'react';

import { beep } from '../helpers';
import { useQr } from '../hooks/use-qr';
import { useUserMedia } from '../hooks/use-user-media';
import { VuleQRProps, VuleQRResult } from '../types';

// Crosshair config
const xHairSquare = {
  svg: 'M288,298 L288,326 C288,335.388841 280.388841,343 271,343 L243.328859,343 L243.328,319 L249,319 C257.284271,319 264,312.284271 264,304 L264,298 L288,298 Z M56,298 L56,304 C56,312.284271 62.7157288,319 71,319 L76.671,319 L76.6711409,343 L49,343 C39.6111593,343 32,335.388841 32,326 L32,298 L56,298 Z M271,87 C280.388841,87 288,94.6111593 288,104 L288,133 L264,133 L264,126 C264,117.715729 257.284271,111 249,111 L243.328,111 L243.328859,87 L271,87 Z M32,104 C32,94.6111593 39.6111593,87 49,87 L76.6711409,87 L76.671,111 L71,111 C62.7157288,111 56,117.715729 56,126 L56,133 L32,133 L32,104 Z',
  width: 256,
  height: 256,
  x0: 32,
  y0: 87,
};

// Camera config
const CAPTURE_OPTIONS = {
  audio: false,
  video: { facingMode: 'environment' },
} as const;

const VIDEO_DIMENSIONS = {
  width: 320,
  height: 430,
};

export default function VuleQR({
  onCapture,
  crosshair = true,
  beepOn = true,
  scanRate = 250,
  onError,
  isLoading,
}: VuleQRProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timestamp = useRef<number>(0);
  const [zbarWorker, zxingWorker] = useQr(handleCapture);

  // const [container, setContainer] = useState({
  //   width: VIDEO_DIMENSIONS.width,
  //   height: VIDEO_DIMENSIONS.height,
  // });
  const container = {
    width: VIDEO_DIMENSIONS.width,
    height: VIDEO_DIMENSIONS.height,
  };
  const [result, setResult] = useState<VuleQRResult | null>(null);

  useEffect(() => {
    if (result) {
      if (beepOn) beep();
      onCapture(result);
      videoRef.current = null;
    }
  }, [result]);

  const [mediaStream, errorMediaStream] = useUserMedia(CAPTURE_OPTIONS);

  //   const [aspectRatio, calculateRatio] = useCardRatio();
  if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
    videoRef.current.srcObject = mediaStream;
  }

  useEffect(() => {
    if (mediaStream && videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        if (isLoading) isLoading(false);
      };
    }
  }, [mediaStream]);

  useEffect(() => {
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [mediaStream]);

  if (errorMediaStream) {
    onError?.(errorMediaStream);
    return null;
  }

  //   function handleResize(contentRect) {
  //     setContainer({
  //       width: VIDEO_DIMENSIONS.width,
  //       height: VIDEO_DIMENSIONS.height,
  //     });
  //   }

  function tick(time: number) {
    if (videoRef.current && videoRef.current.readyState === 4 && canvasRef.current) {
      // Draw video element data onto Canvas
      const context = canvasRef.current.getContext('2d', {
        willReadFrequently: true,
      });
      if (!context) return;
      context.drawImage(
        videoRef.current,
        (videoRef.current.videoWidth - container.width) / 2,
        (videoRef.current.videoHeight - container.height) / 2,
        container.width,
        container.height,
        0,
        0,
        container.width,
        container.height,
      );

      if (crosshair) drawCrosshair(canvasRef.current);
      requestAnimationFrame(tick);
      if (videoRef.current) recogniseQRcode(time);
    }
    // else if (isVideoPlaying) requestAnimationFrame(tick);
  }

  function handleCanPlay() {
    // calculateRatio(videoRef.current.videoHeight, videoRef.current.videoWidth);
    videoRef?.current?.play();
    requestAnimationFrame(tick);
  }

  function recogniseQRcode(time: number) {
    if (time - timestamp.current > scanRate) {
      timestamp.current = time;
      const context = canvasRef.current?.getContext('2d', {
        willReadFrequently: true,
      });
      if (!context) return;
      let imageData;
      if (crosshair) {
        imageData = context.getImageData(
          xHairSquare.x0,
          xHairSquare.y0,
          xHairSquare.width,
          xHairSquare.height,
        );
      } else {
        imageData = context.getImageData(0, 0, container.width, container.height);
      }

      const dimensions = { width: imageData.width, height: imageData.height };
      const bufferZbar = imageData.data.buffer.slice(0);
      const bufferZXing = imageData.data.buffer.slice(0);

      zbarWorker?.postMessage(dimensions);
      zxingWorker?.postMessage(dimensions);
      zbarWorker?.postMessage(imageData, [bufferZbar]);
      zxingWorker?.postMessage(imageData, [bufferZXing]);
    }
  }

  function handleCapture(code: VuleQRResult) {
    if (!videoRef.current) return;
    videoRef.current.pause();
    if (!result) {
      setResult(code);
    }
  }

  if (!mediaStream) {
    return null;
  }

  return (
    <div className="vuleqr__wrapper">
      <div className="vuleqr__container">
        <video
          className="vuleqr__video"
          ref={videoRef}
          onCanPlay={handleCanPlay}
          autoPlay
          playsInline
          muted
        />

        <canvas
          className="vuleqr__canvas"
          ref={canvasRef}
          width={container.width}
          height={container.height}
        />
      </div>
    </div>
  );
}

function drawCrosshair(ref: HTMLCanvasElement) {
  const context = ref.getContext('2d', { willReadFrequently: true });
  if (!context) return;
  context.fillStyle = 'rgba(255,255,255,0.4)';
  const shape = new Path2D(xHairSquare.svg);
  context.fill(shape);
}

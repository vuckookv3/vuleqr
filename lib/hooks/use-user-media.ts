import { useEffect, useState } from 'react';

export function useUserMedia(requestedMedia: MediaStreamConstraints) {
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<Error | null>(null);
  // const mediaStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const userMediaError = checkUserMediaError();
    if (userMediaError) {
      return;
    }

    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
        setMediaStream(stream);
      } catch (err) {
        setError(new Error('Error accessing media devices.'));
        setMediaStream(null);
      }
    }
    setupCamera();

    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
        setMediaStream(null);
      }
    };
  }, []);


  return [mediaStream, error] as const;
}

function checkUserMediaError() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return new Error('Browser API navigator.mediaDevices.getUserMedia not available');
  }
  return null;
}
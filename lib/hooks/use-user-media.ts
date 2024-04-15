import { useEffect, useState } from 'react';

export function useUserMedia(requestedMedia: MediaStreamConstraints) {
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const userMediaError = checkUserMediaError();
    if (userMediaError) {
      return;
    }

    async function setupCamera() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(requestedMedia);
        setMediaStream(mediaStream);
      } catch (err) {
        return null;
      }
    }
    setupCamera();
  }, [requestedMedia]);

  useEffect(() => {
    return () => {
      if (!mediaStream) {
        return;
      }
      mediaStream.getTracks().forEach((track) => track.stop());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return mediaStream;
}

function checkUserMediaError() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return new Error('Browser API navigator.mediaDevices.getUserMedia not available');
  }
  return null;
}

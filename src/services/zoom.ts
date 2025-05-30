import { ZoomMtg } from '@zoom/meetingsdk';

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.18.0/lib', '/av');

const API_KEY = import.meta.env.VITE_ZOOM_API_KEY;
const API_SECRET = import.meta.env.VITE_ZOOM_API_SECRET;

export const initializeZoom = () => {
  ZoomMtg.preLoadWasm();
  ZoomMtg.prepareWebSDK();
};

export const createZoomMeeting = async (
  topic: string,
  startTime: Date,
  duration: number
) => {
  try {
    const response = await fetch('/api/zoom/create-meeting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        topic,
        start_time: startTime.toISOString(),
        duration,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create Zoom meeting');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating Zoom meeting:', error);
    throw error;
  }
};
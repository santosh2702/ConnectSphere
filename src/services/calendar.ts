import { gapi } from 'gapi-script';

const CALENDAR_SCOPES = ['https://www.googleapis.com/auth/calendar'];
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export const initializeGoogleCalendar = () => {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    scope: CALENDAR_SCOPES.join(' '),
  });
};

export const createCalendarEvent = async (
  title: string,
  description: string,
  startTime: Date,
  endTime: Date
) => {
  const event = {
    summary: title,
    description,
    start: {
      dateTime: startTime.toISOString(),
    },
    end: {
      dateTime: endTime.toISOString(),
    },
  };

  try {
    const response = await gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });
    return response.result;
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw error;
  }
};
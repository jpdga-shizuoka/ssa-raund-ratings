import { EventId } from './models';

export interface Position {
  lat: number;
  lng: number;
}
export interface GeoMarker {
  position: Position;
  eventId: EventId;
  location: string;
  title: string;
}

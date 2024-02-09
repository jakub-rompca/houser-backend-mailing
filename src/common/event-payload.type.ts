export type ReservationCreatedPayload = {
  reservingUserName: string;
  reservingUserEmail: string;
  propertyName: string;
  propertyOwnerEmail: string;
  startDate: Date;
  endDate: Date;
};

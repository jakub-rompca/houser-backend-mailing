import { OnEvent } from '@nestjs/event-emitter';
import { EventEnum } from '../common/event.enum';
import { MailService } from './mail.service';
import { ReservationCreatedPayload } from '../common/event-payload.type';

export class MailListener {
  constructor(private readonly mailService: MailService) {}

  @OnEvent(EventEnum.RESERVATION_CREATED)
  handleReservationCreatedEvent(payload: ReservationCreatedPayload) {
    console.log('[MAIL MODULE | EVENT HANDLED]: ', payload);
  }
}

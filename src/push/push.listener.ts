import { OnEvent } from '@nestjs/event-emitter';
import { EventEnum } from '../common/event.enum';
import { PushService } from './push.service';
import { ReservationCreatedPayload } from '../common/event-payload.type';

export class PushListener {
  constructor(private readonly pushService: PushService) {}

  @OnEvent(EventEnum.RESERVATION_CREATED)
  handleReservationCreatedEvent(payload: ReservationCreatedPayload) {
    console.log('[PUSH MODULE | EVENT HANDLED]: ', payload);
  }
}

import { AvianCarriersService } from './avian-carriers.service';
import { OnEvent } from '@nestjs/event-emitter';
import { EventEnum } from '../common/event.enum';
import { ReservationCreatedPayload } from '../common/event-payload.type';

export class AvianCarriersListener {
  constructor(private readonly avianCarriersService: AvianCarriersService) {}

  @OnEvent(EventEnum.RESERVATION_CREATED)
  handleReservationCreatedEvent(payload: ReservationCreatedPayload) {
    console.log('[AVIAN CARRIERS MODULE | EVENT HANDLED]: ', payload);
  }
}

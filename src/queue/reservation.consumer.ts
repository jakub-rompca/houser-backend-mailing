import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ReservationCreatedPayload } from '../common/event-payload.type';
import { EventEnum } from '../common/event.enum';
import { QueueNamesEnum } from './queue.enum';

@Processor(QueueNamesEnum.RESERVATION)
export class ReservationConsumer {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Process()
  async consumeReservationMessage(job: Job<ReservationCreatedPayload>) {
    console.log('[QUEUE MODULE | MESSAGE CONSUMED]: ', job.data);
    this.eventEmitter.emit(EventEnum.RESERVATION_CREATED, job.data);
  }
}

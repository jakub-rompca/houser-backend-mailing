import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ReservationConsumer } from './reservation.consumer';
import { QueueNamesEnum } from './queue.enum';

@Module({
  imports: [BullModule.registerQueue({ name: QueueNamesEnum.RESERVATION })],
  providers: [ReservationConsumer],
})
export class QueueModule {}

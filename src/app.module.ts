import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { PushModule } from './push/push.module';
import { AvianCarriersModule } from './avian-carriers/avian-carriers.module';
import { BullModule } from '@nestjs/bull';
import { QueueModule } from './queue/queue.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        // TODO from envs
        host: 'localhost',
        port: 6379,
      },
    }),
    EventEmitterModule.forRoot(),
    MailModule,
    PushModule,
    AvianCarriersModule,
    QueueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

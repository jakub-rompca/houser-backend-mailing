import { Module } from '@nestjs/common';
import { PushService } from './push.service';
import { PushListener } from './push.listener';

@Module({
  imports: [],
  providers: [PushService, PushListener],
})
export class PushModule {}

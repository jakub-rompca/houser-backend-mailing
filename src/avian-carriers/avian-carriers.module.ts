import { Module } from '@nestjs/common';
import { AvianCarriersService } from './avian-carriers.service';
import { AvianCarriersListener } from './avian-carriers.listener';

@Module({
  imports: [],
  providers: [AvianCarriersService, AvianCarriersListener],
})
export class AvianCarriersModule {}

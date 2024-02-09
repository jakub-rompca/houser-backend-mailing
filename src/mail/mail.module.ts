import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailListener } from './mail.listener';

@Module({
  imports: [],
  providers: [MailService, MailListener],
})
export class MailModule {}

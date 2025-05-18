import { Module } from '@nestjs/common';
import { WithdrawService } from './withdraw.service';

@Module({
  providers: [WithdrawService],
  exports: [WithdrawService],
})
export class WithdrawModule {}

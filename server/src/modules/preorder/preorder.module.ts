import { Module } from '@nestjs/common';
import { PreorderService } from './preorder.service';

@Module({
  providers: [PreorderService],
  exports: [PreorderService],
})
export class PreorderModule {}

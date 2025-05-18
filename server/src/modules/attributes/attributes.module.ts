import { Module } from '@nestjs/common';
import { AttributesService } from './attributes.service';

@Module({
  providers: [AttributesService],
  exports: [AttributesService],
})
export class AttributesModule {}

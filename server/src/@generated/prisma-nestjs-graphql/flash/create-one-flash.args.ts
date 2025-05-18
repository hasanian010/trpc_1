import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlashCreateInput } from './flash-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFlashArgs {

    @Field(() => FlashCreateInput, {nullable:false})
    @Type(() => FlashCreateInput)
    data!: FlashCreateInput;
}

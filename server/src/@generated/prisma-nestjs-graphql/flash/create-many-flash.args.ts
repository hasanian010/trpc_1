import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlashCreateManyInput } from './flash-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFlashArgs {

    @Field(() => [FlashCreateManyInput], {nullable:false})
    @Type(() => FlashCreateManyInput)
    data!: Array<FlashCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

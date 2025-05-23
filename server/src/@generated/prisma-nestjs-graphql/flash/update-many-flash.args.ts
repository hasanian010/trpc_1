import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlashUpdateManyMutationInput } from './flash-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FlashWhereInput } from './flash-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyFlashArgs {

    @Field(() => FlashUpdateManyMutationInput, {nullable:false})
    @Type(() => FlashUpdateManyMutationInput)
    data!: FlashUpdateManyMutationInput;

    @Field(() => FlashWhereInput, {nullable:true})
    @Type(() => FlashWhereInput)
    where?: FlashWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

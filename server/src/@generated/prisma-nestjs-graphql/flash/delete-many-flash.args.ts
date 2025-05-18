import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlashWhereInput } from './flash-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyFlashArgs {

    @Field(() => FlashWhereInput, {nullable:true})
    @Type(() => FlashWhereInput)
    where?: FlashWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

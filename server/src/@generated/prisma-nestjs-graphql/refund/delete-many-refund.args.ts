import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundWhereInput } from './refund-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyRefundArgs {

    @Field(() => RefundWhereInput, {nullable:true})
    @Type(() => RefundWhereInput)
    where?: RefundWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

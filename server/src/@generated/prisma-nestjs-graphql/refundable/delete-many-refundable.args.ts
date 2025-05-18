import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundableWhereInput } from './refundable-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyRefundableArgs {

    @Field(() => RefundableWhereInput, {nullable:true})
    @Type(() => RefundableWhereInput)
    where?: RefundableWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

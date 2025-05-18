import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundUpdateManyMutationInput } from './refund-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RefundWhereInput } from './refund-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyRefundArgs {

    @Field(() => RefundUpdateManyMutationInput, {nullable:false})
    @Type(() => RefundUpdateManyMutationInput)
    data!: RefundUpdateManyMutationInput;

    @Field(() => RefundWhereInput, {nullable:true})
    @Type(() => RefundWhereInput)
    where?: RefundWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

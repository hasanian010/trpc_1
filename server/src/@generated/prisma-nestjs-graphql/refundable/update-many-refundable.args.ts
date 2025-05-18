import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundableUpdateManyMutationInput } from './refundable-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RefundableWhereInput } from './refundable-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyRefundableArgs {

    @Field(() => RefundableUpdateManyMutationInput, {nullable:false})
    @Type(() => RefundableUpdateManyMutationInput)
    data!: RefundableUpdateManyMutationInput;

    @Field(() => RefundableWhereInput, {nullable:true})
    @Type(() => RefundableWhereInput)
    where?: RefundableWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

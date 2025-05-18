import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableWhereInput } from './refundable-where.input';
import { Type } from 'class-transformer';
import { RefundableUpdateWithoutRefundsInput } from './refundable-update-without-refunds.input';

@InputType()
export class RefundableUpdateToOneWithWhereWithoutRefundsInput {

    @Field(() => RefundableWhereInput, {nullable:true})
    @Type(() => RefundableWhereInput)
    where?: RefundableWhereInput;

    @Field(() => RefundableUpdateWithoutRefundsInput, {nullable:false})
    @Type(() => RefundableUpdateWithoutRefundsInput)
    data!: RefundableUpdateWithoutRefundsInput;
}

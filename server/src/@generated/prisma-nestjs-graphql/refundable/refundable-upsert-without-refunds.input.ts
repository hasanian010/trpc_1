import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableUpdateWithoutRefundsInput } from './refundable-update-without-refunds.input';
import { Type } from 'class-transformer';
import { RefundableCreateWithoutRefundsInput } from './refundable-create-without-refunds.input';
import { RefundableWhereInput } from './refundable-where.input';

@InputType()
export class RefundableUpsertWithoutRefundsInput {

    @Field(() => RefundableUpdateWithoutRefundsInput, {nullable:false})
    @Type(() => RefundableUpdateWithoutRefundsInput)
    update!: RefundableUpdateWithoutRefundsInput;

    @Field(() => RefundableCreateWithoutRefundsInput, {nullable:false})
    @Type(() => RefundableCreateWithoutRefundsInput)
    create!: RefundableCreateWithoutRefundsInput;

    @Field(() => RefundableWhereInput, {nullable:true})
    @Type(() => RefundableWhereInput)
    where?: RefundableWhereInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { RefundableCreateNestedOneWithoutRefundsInput } from '../refundable/refundable-create-nested-one-without-refunds.input';

@InputType()
export class RefundCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:false})
    reason!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RefundableCreateNestedOneWithoutRefundsInput, {nullable:false})
    refundable!: RefundableCreateNestedOneWithoutRefundsInput;
}

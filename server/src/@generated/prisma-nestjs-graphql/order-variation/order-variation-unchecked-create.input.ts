import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableUncheckedCreateNestedManyWithoutVariationsInput } from '../refundable/refundable-unchecked-create-nested-many-without-variations.input';

@InputType()
export class OrderVariationUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    variant!: string;

    @Field(() => String, {nullable:false})
    orderProductId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RefundableUncheckedCreateNestedManyWithoutVariationsInput, {nullable:true})
    refundables?: RefundableUncheckedCreateNestedManyWithoutVariationsInput;
}

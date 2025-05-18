import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RefundableCreateNestedManyWithoutVariationsInput } from '../refundable/refundable-create-nested-many-without-variations.input';

@InputType()
export class OrderVariationCreateWithoutOrderProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    variant!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RefundableCreateNestedManyWithoutVariationsInput, {nullable:true})
    refundables?: RefundableCreateNestedManyWithoutVariationsInput;
}

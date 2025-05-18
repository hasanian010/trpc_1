import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeUncheckedCreateNestedManyWithoutAttributesInput } from '../product-attribute/product-attribute-unchecked-create-nested-many-without-attributes.input';

@InputType()
export class AttributeUncheckedCreateWithoutValuesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductAttributeUncheckedCreateNestedManyWithoutAttributesInput, {nullable:true})
    productAttributes?: ProductAttributeUncheckedCreateNestedManyWithoutAttributesInput;
}

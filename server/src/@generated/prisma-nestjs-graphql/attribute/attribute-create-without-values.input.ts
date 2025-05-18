import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeCreateNestedManyWithoutAttributesInput } from '../product-attribute/product-attribute-create-nested-many-without-attributes.input';

@InputType()
export class AttributeCreateWithoutValuesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductAttributeCreateNestedManyWithoutAttributesInput, {nullable:true})
    productAttributes?: ProductAttributeCreateNestedManyWithoutAttributesInput;
}

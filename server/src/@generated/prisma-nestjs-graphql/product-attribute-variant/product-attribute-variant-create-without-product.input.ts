import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeVariantCreateselectedInput } from './product-attribute-variant-createselected.input';
import { ProductAttributeCreateNestedOneWithoutSelectedVariantsInput } from '../product-attribute/product-attribute-create-nested-one-without-selected-variants.input';

@InputType()
export class ProductAttributeVariantCreateWithoutProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ProductAttributeVariantCreateselectedInput, {nullable:true})
    selected?: ProductAttributeVariantCreateselectedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductAttributeCreateNestedOneWithoutSelectedVariantsInput, {nullable:true})
    productAttribute?: ProductAttributeCreateNestedOneWithoutSelectedVariantsInput;
}

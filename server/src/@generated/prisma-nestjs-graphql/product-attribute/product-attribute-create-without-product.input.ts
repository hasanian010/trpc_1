import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttributeCreateNestedManyWithoutProductAttributesInput } from '../attribute/attribute-create-nested-many-without-product-attributes.input';
import { ProductAttributeVariantCreateNestedManyWithoutProductAttributeInput } from '../product-attribute-variant/product-attribute-variant-create-nested-many-without-product-attribute.input';
import { ProductAttributeValuesCreateNestedManyWithoutProductAttributeInput } from '../product-attribute-values/product-attribute-values-create-nested-many-without-product-attribute.input';

@InputType()
export class ProductAttributeCreateWithoutProductInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AttributeCreateNestedManyWithoutProductAttributesInput, {nullable:true})
    attributes?: AttributeCreateNestedManyWithoutProductAttributesInput;

    @Field(() => ProductAttributeVariantCreateNestedManyWithoutProductAttributeInput, {nullable:true})
    selectedVariants?: ProductAttributeVariantCreateNestedManyWithoutProductAttributeInput;

    @Field(() => ProductAttributeValuesCreateNestedManyWithoutProductAttributeInput, {nullable:true})
    attributeValues?: ProductAttributeValuesCreateNestedManyWithoutProductAttributeInput;
}

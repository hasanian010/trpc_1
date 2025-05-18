import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttributeCreateNestedManyWithoutProductAttributesInput } from '../attribute/attribute-create-nested-many-without-product-attributes.input';
import { ProductAttributeValuesCreateNestedManyWithoutProductAttributeInput } from '../product-attribute-values/product-attribute-values-create-nested-many-without-product-attribute.input';
import { ProductCreateNestedOneWithoutProductAttributeInput } from '../product/product-create-nested-one-without-product-attribute.input';

@InputType()
export class ProductAttributeCreateWithoutSelectedVariantsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AttributeCreateNestedManyWithoutProductAttributesInput, {nullable:true})
    attributes?: AttributeCreateNestedManyWithoutProductAttributesInput;

    @Field(() => ProductAttributeValuesCreateNestedManyWithoutProductAttributeInput, {nullable:true})
    attributeValues?: ProductAttributeValuesCreateNestedManyWithoutProductAttributeInput;

    @Field(() => ProductCreateNestedOneWithoutProductAttributeInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutProductAttributeInput;
}

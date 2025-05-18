import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttributeUncheckedCreateNestedManyWithoutProductAttributesInput } from '../attribute/attribute-unchecked-create-nested-many-without-product-attributes.input';
import { ProductAttributeValuesUncheckedCreateNestedManyWithoutProductAttributeInput } from '../product-attribute-values/product-attribute-values-unchecked-create-nested-many-without-product-attribute.input';

@InputType()
export class ProductAttributeUncheckedCreateWithoutSelectedVariantsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AttributeUncheckedCreateNestedManyWithoutProductAttributesInput, {nullable:true})
    attributes?: AttributeUncheckedCreateNestedManyWithoutProductAttributesInput;

    @Field(() => ProductAttributeValuesUncheckedCreateNestedManyWithoutProductAttributeInput, {nullable:true})
    attributeValues?: ProductAttributeValuesUncheckedCreateNestedManyWithoutProductAttributeInput;
}

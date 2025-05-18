import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AttributeUncheckedCreateNestedManyWithoutProductAttributesInput } from '../attribute/attribute-unchecked-create-nested-many-without-product-attributes.input';
import { ProductAttributeVariantUncheckedCreateNestedManyWithoutProductAttributeInput } from '../product-attribute-variant/product-attribute-variant-unchecked-create-nested-many-without-product-attribute.input';

@InputType()
export class ProductAttributeUncheckedCreateWithoutAttributeValuesInput {

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

    @Field(() => ProductAttributeVariantUncheckedCreateNestedManyWithoutProductAttributeInput, {nullable:true})
    selectedVariants?: ProductAttributeVariantUncheckedCreateNestedManyWithoutProductAttributeInput;
}

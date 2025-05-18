import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeVariantUncheckedCreateNestedManyWithoutProductAttributeInput } from '../product-attribute-variant/product-attribute-variant-unchecked-create-nested-many-without-product-attribute.input';
import { ProductAttributeValuesUncheckedCreateNestedManyWithoutProductAttributeInput } from '../product-attribute-values/product-attribute-values-unchecked-create-nested-many-without-product-attribute.input';

@InputType()
export class ProductAttributeUncheckedCreateWithoutAttributesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductAttributeVariantUncheckedCreateNestedManyWithoutProductAttributeInput, {nullable:true})
    selectedVariants?: ProductAttributeVariantUncheckedCreateNestedManyWithoutProductAttributeInput;

    @Field(() => ProductAttributeValuesUncheckedCreateNestedManyWithoutProductAttributeInput, {nullable:true})
    attributeValues?: ProductAttributeValuesUncheckedCreateNestedManyWithoutProductAttributeInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeVariantCreateselectedInput } from './product-attribute-variant-createselected.input';
import { ProductCreateNestedOneWithoutAttributeVariantsInput } from '../product/product-create-nested-one-without-attribute-variants.input';

@InputType()
export class ProductAttributeVariantCreateWithoutProductAttributeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ProductAttributeVariantCreateselectedInput, {nullable:true})
    selected?: ProductAttributeVariantCreateselectedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutAttributeVariantsInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutAttributeVariantsInput;
}

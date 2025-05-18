import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateNestedOneWithoutAttributeValuesInput } from '../product/product-create-nested-one-without-attribute-values.input';
import { ProductAttributeCreateNestedOneWithoutAttributeValuesInput } from '../product-attribute/product-attribute-create-nested-one-without-attribute-values.input';

@InputType()
export class ProductAttributeValuesCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    variant?: string;

    @Field(() => String, {nullable:true})
    price?: string;

    @Field(() => String, {nullable:true})
    quantity?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateNestedOneWithoutAttributeValuesInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutAttributeValuesInput;

    @Field(() => ProductAttributeCreateNestedOneWithoutAttributeValuesInput, {nullable:true})
    productAttribute?: ProductAttributeCreateNestedOneWithoutAttributeValuesInput;
}

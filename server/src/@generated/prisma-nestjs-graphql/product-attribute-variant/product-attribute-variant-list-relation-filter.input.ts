import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeVariantWhereInput } from './product-attribute-variant-where.input';

@InputType()
export class ProductAttributeVariantListRelationFilter {

    @Field(() => ProductAttributeVariantWhereInput, {nullable:true})
    every?: ProductAttributeVariantWhereInput;

    @Field(() => ProductAttributeVariantWhereInput, {nullable:true})
    some?: ProductAttributeVariantWhereInput;

    @Field(() => ProductAttributeVariantWhereInput, {nullable:true})
    none?: ProductAttributeVariantWhereInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeValuesWhereInput } from './product-attribute-values-where.input';

@InputType()
export class ProductAttributeValuesListRelationFilter {

    @Field(() => ProductAttributeValuesWhereInput, {nullable:true})
    every?: ProductAttributeValuesWhereInput;

    @Field(() => ProductAttributeValuesWhereInput, {nullable:true})
    some?: ProductAttributeValuesWhereInput;

    @Field(() => ProductAttributeValuesWhereInput, {nullable:true})
    none?: ProductAttributeValuesWhereInput;
}

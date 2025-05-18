import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeWhereInput } from './product-attribute-where.input';

@InputType()
export class ProductAttributeListRelationFilter {

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    every?: ProductAttributeWhereInput;

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    some?: ProductAttributeWhereInput;

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    none?: ProductAttributeWhereInput;
}

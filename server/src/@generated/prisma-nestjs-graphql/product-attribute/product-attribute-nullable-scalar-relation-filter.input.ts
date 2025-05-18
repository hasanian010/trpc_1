import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeWhereInput } from './product-attribute-where.input';

@InputType()
export class ProductAttributeNullableScalarRelationFilter {

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    is?: ProductAttributeWhereInput;

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    isNot?: ProductAttributeWhereInput;
}

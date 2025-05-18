import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductMetaWhereInput } from './product-meta-where.input';

@InputType()
export class ProductMetaNullableScalarRelationFilter {

    @Field(() => ProductMetaWhereInput, {nullable:true})
    is?: ProductMetaWhereInput;

    @Field(() => ProductMetaWhereInput, {nullable:true})
    isNot?: ProductMetaWhereInput;
}

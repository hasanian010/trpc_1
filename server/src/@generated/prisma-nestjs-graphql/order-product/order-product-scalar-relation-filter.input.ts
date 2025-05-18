import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductWhereInput } from './order-product-where.input';

@InputType()
export class OrderProductScalarRelationFilter {

    @Field(() => OrderProductWhereInput, {nullable:true})
    is?: OrderProductWhereInput;

    @Field(() => OrderProductWhereInput, {nullable:true})
    isNot?: OrderProductWhereInput;
}

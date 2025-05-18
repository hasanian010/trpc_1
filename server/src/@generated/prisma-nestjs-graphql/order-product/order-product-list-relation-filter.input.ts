import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderProductWhereInput } from './order-product-where.input';

@InputType()
export class OrderProductListRelationFilter {

    @Field(() => OrderProductWhereInput, {nullable:true})
    every?: OrderProductWhereInput;

    @Field(() => OrderProductWhereInput, {nullable:true})
    some?: OrderProductWhereInput;

    @Field(() => OrderProductWhereInput, {nullable:true})
    none?: OrderProductWhereInput;
}

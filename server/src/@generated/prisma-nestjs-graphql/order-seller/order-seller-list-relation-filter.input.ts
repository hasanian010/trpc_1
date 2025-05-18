import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerWhereInput } from './order-seller-where.input';

@InputType()
export class OrderSellerListRelationFilter {

    @Field(() => OrderSellerWhereInput, {nullable:true})
    every?: OrderSellerWhereInput;

    @Field(() => OrderSellerWhereInput, {nullable:true})
    some?: OrderSellerWhereInput;

    @Field(() => OrderSellerWhereInput, {nullable:true})
    none?: OrderSellerWhereInput;
}

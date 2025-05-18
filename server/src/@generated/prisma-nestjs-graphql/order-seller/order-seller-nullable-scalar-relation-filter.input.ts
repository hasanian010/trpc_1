import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderSellerWhereInput } from './order-seller-where.input';

@InputType()
export class OrderSellerNullableScalarRelationFilter {

    @Field(() => OrderSellerWhereInput, {nullable:true})
    is?: OrderSellerWhereInput;

    @Field(() => OrderSellerWhereInput, {nullable:true})
    isNot?: OrderSellerWhereInput;
}

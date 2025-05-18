import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderVariationWhereInput } from './order-variation-where.input';

@InputType()
export class OrderVariationListRelationFilter {

    @Field(() => OrderVariationWhereInput, {nullable:true})
    every?: OrderVariationWhereInput;

    @Field(() => OrderVariationWhereInput, {nullable:true})
    some?: OrderVariationWhereInput;

    @Field(() => OrderVariationWhereInput, {nullable:true})
    none?: OrderVariationWhereInput;
}

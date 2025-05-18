import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderProductCountAggregate } from './order-product-count-aggregate.output';
import { OrderProductAvgAggregate } from './order-product-avg-aggregate.output';
import { OrderProductSumAggregate } from './order-product-sum-aggregate.output';
import { OrderProductMinAggregate } from './order-product-min-aggregate.output';
import { OrderProductMaxAggregate } from './order-product-max-aggregate.output';

@ObjectType()
export class OrderProductGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Float, {nullable:false})
    tax!: number;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:true})
    orderSellerId?: string;

    @Field(() => [String], {nullable:true})
    refundableIds?: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => OrderProductCountAggregate, {nullable:true})
    _count?: OrderProductCountAggregate;

    @Field(() => OrderProductAvgAggregate, {nullable:true})
    _avg?: OrderProductAvgAggregate;

    @Field(() => OrderProductSumAggregate, {nullable:true})
    _sum?: OrderProductSumAggregate;

    @Field(() => OrderProductMinAggregate, {nullable:true})
    _min?: OrderProductMinAggregate;

    @Field(() => OrderProductMaxAggregate, {nullable:true})
    _max?: OrderProductMaxAggregate;
}

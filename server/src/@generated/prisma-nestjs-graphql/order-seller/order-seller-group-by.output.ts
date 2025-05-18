import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OrderSellerCountAggregate } from './order-seller-count-aggregate.output';
import { OrderSellerAvgAggregate } from './order-seller-avg-aggregate.output';
import { OrderSellerSumAggregate } from './order-seller-sum-aggregate.output';
import { OrderSellerMinAggregate } from './order-seller-min-aggregate.output';
import { OrderSellerMaxAggregate } from './order-seller-max-aggregate.output';

@ObjectType()
export class OrderSellerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sellerId!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => Float, {nullable:false})
    price!: number;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:true})
    cancelBy?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => OrderSellerCountAggregate, {nullable:true})
    _count?: OrderSellerCountAggregate;

    @Field(() => OrderSellerAvgAggregate, {nullable:true})
    _avg?: OrderSellerAvgAggregate;

    @Field(() => OrderSellerSumAggregate, {nullable:true})
    _sum?: OrderSellerSumAggregate;

    @Field(() => OrderSellerMinAggregate, {nullable:true})
    _min?: OrderSellerMinAggregate;

    @Field(() => OrderSellerMaxAggregate, {nullable:true})
    _max?: OrderSellerMaxAggregate;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SellerCountAggregate } from './seller-count-aggregate.output';
import { SellerAvgAggregate } from './seller-avg-aggregate.output';
import { SellerSumAggregate } from './seller-sum-aggregate.output';
import { SellerMinAggregate } from './seller-min-aggregate.output';
import { SellerMaxAggregate } from './seller-max-aggregate.output';

@ObjectType()
export class AggregateSeller {

    @Field(() => SellerCountAggregate, {nullable:true})
    _count?: SellerCountAggregate;

    @Field(() => SellerAvgAggregate, {nullable:true})
    _avg?: SellerAvgAggregate;

    @Field(() => SellerSumAggregate, {nullable:true})
    _sum?: SellerSumAggregate;

    @Field(() => SellerMinAggregate, {nullable:true})
    _min?: SellerMinAggregate;

    @Field(() => SellerMaxAggregate, {nullable:true})
    _max?: SellerMaxAggregate;
}

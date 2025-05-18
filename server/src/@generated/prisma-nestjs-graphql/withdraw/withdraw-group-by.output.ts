import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { WithdrawCountAggregate } from './withdraw-count-aggregate.output';
import { WithdrawAvgAggregate } from './withdraw-avg-aggregate.output';
import { WithdrawSumAggregate } from './withdraw-sum-aggregate.output';
import { WithdrawMinAggregate } from './withdraw-min-aggregate.output';
import { WithdrawMaxAggregate } from './withdraw-max-aggregate.output';

@ObjectType()
export class WithdrawGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sellerId!: string;

    @Field(() => Float, {nullable:false})
    amount!: number;

    @Field(() => String, {nullable:true})
    releasedById?: string;

    @Field(() => String, {nullable:false})
    method!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => WithdrawCountAggregate, {nullable:true})
    _count?: WithdrawCountAggregate;

    @Field(() => WithdrawAvgAggregate, {nullable:true})
    _avg?: WithdrawAvgAggregate;

    @Field(() => WithdrawSumAggregate, {nullable:true})
    _sum?: WithdrawSumAggregate;

    @Field(() => WithdrawMinAggregate, {nullable:true})
    _min?: WithdrawMinAggregate;

    @Field(() => WithdrawMaxAggregate, {nullable:true})
    _max?: WithdrawMaxAggregate;
}

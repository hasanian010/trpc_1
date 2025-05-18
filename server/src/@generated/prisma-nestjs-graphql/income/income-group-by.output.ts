import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { IncomeCountAggregate } from './income-count-aggregate.output';
import { IncomeAvgAggregate } from './income-avg-aggregate.output';
import { IncomeSumAggregate } from './income-sum-aggregate.output';
import { IncomeMinAggregate } from './income-min-aggregate.output';
import { IncomeMaxAggregate } from './income-max-aggregate.output';

@ObjectType()
export class IncomeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sellerId!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => Float, {nullable:true})
    income?: number;

    @Field(() => Boolean, {nullable:true})
    paySuccess?: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => IncomeCountAggregate, {nullable:true})
    _count?: IncomeCountAggregate;

    @Field(() => IncomeAvgAggregate, {nullable:true})
    _avg?: IncomeAvgAggregate;

    @Field(() => IncomeSumAggregate, {nullable:true})
    _sum?: IncomeSumAggregate;

    @Field(() => IncomeMinAggregate, {nullable:true})
    _min?: IncomeMinAggregate;

    @Field(() => IncomeMaxAggregate, {nullable:true})
    _max?: IncomeMaxAggregate;
}

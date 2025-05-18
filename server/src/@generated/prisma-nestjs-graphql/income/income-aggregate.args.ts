import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { IncomeWhereInput } from './income-where.input';
import { Type } from 'class-transformer';
import { IncomeOrderByWithRelationInput } from './income-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { IncomeWhereUniqueInput } from './income-where-unique.input';
import { Int } from '@nestjs/graphql';
import { IncomeCountAggregateInput } from './income-count-aggregate.input';
import { IncomeAvgAggregateInput } from './income-avg-aggregate.input';
import { IncomeSumAggregateInput } from './income-sum-aggregate.input';
import { IncomeMinAggregateInput } from './income-min-aggregate.input';
import { IncomeMaxAggregateInput } from './income-max-aggregate.input';

@ArgsType()
export class IncomeAggregateArgs {

    @Field(() => IncomeWhereInput, {nullable:true})
    @Type(() => IncomeWhereInput)
    where?: IncomeWhereInput;

    @Field(() => [IncomeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<IncomeOrderByWithRelationInput>;

    @Field(() => IncomeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<IncomeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => IncomeCountAggregateInput, {nullable:true})
    _count?: IncomeCountAggregateInput;

    @Field(() => IncomeAvgAggregateInput, {nullable:true})
    _avg?: IncomeAvgAggregateInput;

    @Field(() => IncomeSumAggregateInput, {nullable:true})
    _sum?: IncomeSumAggregateInput;

    @Field(() => IncomeMinAggregateInput, {nullable:true})
    _min?: IncomeMinAggregateInput;

    @Field(() => IncomeMaxAggregateInput, {nullable:true})
    _max?: IncomeMaxAggregateInput;
}

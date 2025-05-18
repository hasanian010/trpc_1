import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { WithdrawWhereInput } from './withdraw-where.input';
import { Type } from 'class-transformer';
import { WithdrawOrderByWithRelationInput } from './withdraw-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { WithdrawWhereUniqueInput } from './withdraw-where-unique.input';
import { Int } from '@nestjs/graphql';
import { WithdrawCountAggregateInput } from './withdraw-count-aggregate.input';
import { WithdrawAvgAggregateInput } from './withdraw-avg-aggregate.input';
import { WithdrawSumAggregateInput } from './withdraw-sum-aggregate.input';
import { WithdrawMinAggregateInput } from './withdraw-min-aggregate.input';
import { WithdrawMaxAggregateInput } from './withdraw-max-aggregate.input';

@ArgsType()
export class WithdrawAggregateArgs {

    @Field(() => WithdrawWhereInput, {nullable:true})
    @Type(() => WithdrawWhereInput)
    where?: WithdrawWhereInput;

    @Field(() => [WithdrawOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<WithdrawOrderByWithRelationInput>;

    @Field(() => WithdrawWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<WithdrawWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => WithdrawCountAggregateInput, {nullable:true})
    _count?: WithdrawCountAggregateInput;

    @Field(() => WithdrawAvgAggregateInput, {nullable:true})
    _avg?: WithdrawAvgAggregateInput;

    @Field(() => WithdrawSumAggregateInput, {nullable:true})
    _sum?: WithdrawSumAggregateInput;

    @Field(() => WithdrawMinAggregateInput, {nullable:true})
    _min?: WithdrawMinAggregateInput;

    @Field(() => WithdrawMaxAggregateInput, {nullable:true})
    _max?: WithdrawMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPointsWhereInput } from './user-points-where.input';
import { Type } from 'class-transformer';
import { UserPointsOrderByWithRelationInput } from './user-points-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { UserPointsWhereUniqueInput } from './user-points-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserPointsCountAggregateInput } from './user-points-count-aggregate.input';
import { UserPointsAvgAggregateInput } from './user-points-avg-aggregate.input';
import { UserPointsSumAggregateInput } from './user-points-sum-aggregate.input';
import { UserPointsMinAggregateInput } from './user-points-min-aggregate.input';
import { UserPointsMaxAggregateInput } from './user-points-max-aggregate.input';

@ArgsType()
export class UserPointsAggregateArgs {

    @Field(() => UserPointsWhereInput, {nullable:true})
    @Type(() => UserPointsWhereInput)
    where?: UserPointsWhereInput;

    @Field(() => [UserPointsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserPointsOrderByWithRelationInput>;

    @Field(() => UserPointsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<UserPointsWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserPointsCountAggregateInput, {nullable:true})
    _count?: UserPointsCountAggregateInput;

    @Field(() => UserPointsAvgAggregateInput, {nullable:true})
    _avg?: UserPointsAvgAggregateInput;

    @Field(() => UserPointsSumAggregateInput, {nullable:true})
    _sum?: UserPointsSumAggregateInput;

    @Field(() => UserPointsMinAggregateInput, {nullable:true})
    _min?: UserPointsMinAggregateInput;

    @Field(() => UserPointsMaxAggregateInput, {nullable:true})
    _max?: UserPointsMaxAggregateInput;
}

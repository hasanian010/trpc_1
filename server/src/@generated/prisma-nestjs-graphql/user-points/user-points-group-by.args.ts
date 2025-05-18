import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPointsWhereInput } from './user-points-where.input';
import { Type } from 'class-transformer';
import { UserPointsOrderByWithAggregationInput } from './user-points-order-by-with-aggregation.input';
import { UserPointsScalarFieldEnum } from './user-points-scalar-field.enum';
import { UserPointsScalarWhereWithAggregatesInput } from './user-points-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserPointsCountAggregateInput } from './user-points-count-aggregate.input';
import { UserPointsAvgAggregateInput } from './user-points-avg-aggregate.input';
import { UserPointsSumAggregateInput } from './user-points-sum-aggregate.input';
import { UserPointsMinAggregateInput } from './user-points-min-aggregate.input';
import { UserPointsMaxAggregateInput } from './user-points-max-aggregate.input';

@ArgsType()
export class UserPointsGroupByArgs {

    @Field(() => UserPointsWhereInput, {nullable:true})
    @Type(() => UserPointsWhereInput)
    where?: UserPointsWhereInput;

    @Field(() => [UserPointsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserPointsOrderByWithAggregationInput>;

    @Field(() => [UserPointsScalarFieldEnum], {nullable:false})
    by!: Array<`${UserPointsScalarFieldEnum}`>;

    @Field(() => UserPointsScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserPointsScalarWhereWithAggregatesInput;

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

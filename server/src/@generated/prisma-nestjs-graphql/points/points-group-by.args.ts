import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointsWhereInput } from './points-where.input';
import { Type } from 'class-transformer';
import { PointsOrderByWithAggregationInput } from './points-order-by-with-aggregation.input';
import { PointsScalarFieldEnum } from './points-scalar-field.enum';
import { PointsScalarWhereWithAggregatesInput } from './points-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PointsCountAggregateInput } from './points-count-aggregate.input';
import { PointsAvgAggregateInput } from './points-avg-aggregate.input';
import { PointsSumAggregateInput } from './points-sum-aggregate.input';
import { PointsMinAggregateInput } from './points-min-aggregate.input';
import { PointsMaxAggregateInput } from './points-max-aggregate.input';

@ArgsType()
export class PointsGroupByArgs {

    @Field(() => PointsWhereInput, {nullable:true})
    @Type(() => PointsWhereInput)
    where?: PointsWhereInput;

    @Field(() => [PointsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PointsOrderByWithAggregationInput>;

    @Field(() => [PointsScalarFieldEnum], {nullable:false})
    by!: Array<`${PointsScalarFieldEnum}`>;

    @Field(() => PointsScalarWhereWithAggregatesInput, {nullable:true})
    having?: PointsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PointsCountAggregateInput, {nullable:true})
    _count?: PointsCountAggregateInput;

    @Field(() => PointsAvgAggregateInput, {nullable:true})
    _avg?: PointsAvgAggregateInput;

    @Field(() => PointsSumAggregateInput, {nullable:true})
    _sum?: PointsSumAggregateInput;

    @Field(() => PointsMinAggregateInput, {nullable:true})
    _min?: PointsMinAggregateInput;

    @Field(() => PointsMaxAggregateInput, {nullable:true})
    _max?: PointsMaxAggregateInput;
}

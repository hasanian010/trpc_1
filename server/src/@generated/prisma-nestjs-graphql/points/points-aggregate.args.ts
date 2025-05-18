import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PointsWhereInput } from './points-where.input';
import { Type } from 'class-transformer';
import { PointsOrderByWithRelationInput } from './points-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PointsWhereUniqueInput } from './points-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PointsCountAggregateInput } from './points-count-aggregate.input';
import { PointsAvgAggregateInput } from './points-avg-aggregate.input';
import { PointsSumAggregateInput } from './points-sum-aggregate.input';
import { PointsMinAggregateInput } from './points-min-aggregate.input';
import { PointsMaxAggregateInput } from './points-max-aggregate.input';

@ArgsType()
export class PointsAggregateArgs {

    @Field(() => PointsWhereInput, {nullable:true})
    @Type(() => PointsWhereInput)
    where?: PointsWhereInput;

    @Field(() => [PointsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PointsOrderByWithRelationInput>;

    @Field(() => PointsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PointsWhereUniqueInput, 'id'>;

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

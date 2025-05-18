import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundableWhereInput } from './refundable-where.input';
import { Type } from 'class-transformer';
import { RefundableOrderByWithRelationInput } from './refundable-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RefundableWhereUniqueInput } from './refundable-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RefundableCountAggregateInput } from './refundable-count-aggregate.input';
import { RefundableAvgAggregateInput } from './refundable-avg-aggregate.input';
import { RefundableSumAggregateInput } from './refundable-sum-aggregate.input';
import { RefundableMinAggregateInput } from './refundable-min-aggregate.input';
import { RefundableMaxAggregateInput } from './refundable-max-aggregate.input';

@ArgsType()
export class RefundableAggregateArgs {

    @Field(() => RefundableWhereInput, {nullable:true})
    @Type(() => RefundableWhereInput)
    where?: RefundableWhereInput;

    @Field(() => [RefundableOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefundableOrderByWithRelationInput>;

    @Field(() => RefundableWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RefundableWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RefundableCountAggregateInput, {nullable:true})
    _count?: RefundableCountAggregateInput;

    @Field(() => RefundableAvgAggregateInput, {nullable:true})
    _avg?: RefundableAvgAggregateInput;

    @Field(() => RefundableSumAggregateInput, {nullable:true})
    _sum?: RefundableSumAggregateInput;

    @Field(() => RefundableMinAggregateInput, {nullable:true})
    _min?: RefundableMinAggregateInput;

    @Field(() => RefundableMaxAggregateInput, {nullable:true})
    _max?: RefundableMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreorderWhereInput } from './preorder-where.input';
import { Type } from 'class-transformer';
import { PreorderOrderByWithRelationInput } from './preorder-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PreorderWhereUniqueInput } from './preorder-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PreorderCountAggregateInput } from './preorder-count-aggregate.input';
import { PreorderMinAggregateInput } from './preorder-min-aggregate.input';
import { PreorderMaxAggregateInput } from './preorder-max-aggregate.input';

@ArgsType()
export class PreorderAggregateArgs {

    @Field(() => PreorderWhereInput, {nullable:true})
    @Type(() => PreorderWhereInput)
    where?: PreorderWhereInput;

    @Field(() => [PreorderOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PreorderOrderByWithRelationInput>;

    @Field(() => PreorderWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PreorderWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PreorderCountAggregateInput, {nullable:true})
    _count?: PreorderCountAggregateInput;

    @Field(() => PreorderMinAggregateInput, {nullable:true})
    _min?: PreorderMinAggregateInput;

    @Field(() => PreorderMaxAggregateInput, {nullable:true})
    _max?: PreorderMaxAggregateInput;
}

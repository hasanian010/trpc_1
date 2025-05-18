import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MetaWhereInput } from './meta-where.input';
import { Type } from 'class-transformer';
import { MetaOrderByWithRelationInput } from './meta-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MetaWhereUniqueInput } from './meta-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MetaCountAggregateInput } from './meta-count-aggregate.input';
import { MetaAvgAggregateInput } from './meta-avg-aggregate.input';
import { MetaSumAggregateInput } from './meta-sum-aggregate.input';
import { MetaMinAggregateInput } from './meta-min-aggregate.input';
import { MetaMaxAggregateInput } from './meta-max-aggregate.input';

@ArgsType()
export class MetaAggregateArgs {

    @Field(() => MetaWhereInput, {nullable:true})
    @Type(() => MetaWhereInput)
    where?: MetaWhereInput;

    @Field(() => [MetaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MetaOrderByWithRelationInput>;

    @Field(() => MetaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MetaWhereUniqueInput, 'itemCount_totalItems_itemsPerPage_totalPages_currentPage'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MetaCountAggregateInput, {nullable:true})
    _count?: MetaCountAggregateInput;

    @Field(() => MetaAvgAggregateInput, {nullable:true})
    _avg?: MetaAvgAggregateInput;

    @Field(() => MetaSumAggregateInput, {nullable:true})
    _sum?: MetaSumAggregateInput;

    @Field(() => MetaMinAggregateInput, {nullable:true})
    _min?: MetaMinAggregateInput;

    @Field(() => MetaMaxAggregateInput, {nullable:true})
    _max?: MetaMaxAggregateInput;
}

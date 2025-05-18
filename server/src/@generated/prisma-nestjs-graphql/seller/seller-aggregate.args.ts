import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SellerWhereInput } from './seller-where.input';
import { Type } from 'class-transformer';
import { SellerOrderByWithRelationInput } from './seller-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SellerWhereUniqueInput } from './seller-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SellerCountAggregateInput } from './seller-count-aggregate.input';
import { SellerAvgAggregateInput } from './seller-avg-aggregate.input';
import { SellerSumAggregateInput } from './seller-sum-aggregate.input';
import { SellerMinAggregateInput } from './seller-min-aggregate.input';
import { SellerMaxAggregateInput } from './seller-max-aggregate.input';

@ArgsType()
export class SellerAggregateArgs {

    @Field(() => SellerWhereInput, {nullable:true})
    @Type(() => SellerWhereInput)
    where?: SellerWhereInput;

    @Field(() => [SellerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SellerOrderByWithRelationInput>;

    @Field(() => SellerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<SellerWhereUniqueInput, 'id' | 'userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SellerCountAggregateInput, {nullable:true})
    _count?: SellerCountAggregateInput;

    @Field(() => SellerAvgAggregateInput, {nullable:true})
    _avg?: SellerAvgAggregateInput;

    @Field(() => SellerSumAggregateInput, {nullable:true})
    _sum?: SellerSumAggregateInput;

    @Field(() => SellerMinAggregateInput, {nullable:true})
    _min?: SellerMinAggregateInput;

    @Field(() => SellerMaxAggregateInput, {nullable:true})
    _max?: SellerMaxAggregateInput;
}

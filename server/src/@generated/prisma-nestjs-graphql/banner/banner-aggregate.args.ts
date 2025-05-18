import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BannerWhereInput } from './banner-where.input';
import { Type } from 'class-transformer';
import { BannerOrderByWithRelationInput } from './banner-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BannerWhereUniqueInput } from './banner-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BannerCountAggregateInput } from './banner-count-aggregate.input';
import { BannerMinAggregateInput } from './banner-min-aggregate.input';
import { BannerMaxAggregateInput } from './banner-max-aggregate.input';

@ArgsType()
export class BannerAggregateArgs {

    @Field(() => BannerWhereInput, {nullable:true})
    @Type(() => BannerWhereInput)
    where?: BannerWhereInput;

    @Field(() => [BannerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BannerOrderByWithRelationInput>;

    @Field(() => BannerWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BannerWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BannerCountAggregateInput, {nullable:true})
    _count?: BannerCountAggregateInput;

    @Field(() => BannerMinAggregateInput, {nullable:true})
    _min?: BannerMinAggregateInput;

    @Field(() => BannerMaxAggregateInput, {nullable:true})
    _max?: BannerMaxAggregateInput;
}

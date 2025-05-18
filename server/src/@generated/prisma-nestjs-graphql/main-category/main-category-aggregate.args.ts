import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MainCategoryWhereInput } from './main-category-where.input';
import { Type } from 'class-transformer';
import { MainCategoryOrderByWithRelationInput } from './main-category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MainCategoryWhereUniqueInput } from './main-category-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MainCategoryCountAggregateInput } from './main-category-count-aggregate.input';
import { MainCategoryMinAggregateInput } from './main-category-min-aggregate.input';
import { MainCategoryMaxAggregateInput } from './main-category-max-aggregate.input';

@ArgsType()
export class MainCategoryAggregateArgs {

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    where?: MainCategoryWhereInput;

    @Field(() => [MainCategoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MainCategoryOrderByWithRelationInput>;

    @Field(() => MainCategoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<MainCategoryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MainCategoryCountAggregateInput, {nullable:true})
    _count?: MainCategoryCountAggregateInput;

    @Field(() => MainCategoryMinAggregateInput, {nullable:true})
    _min?: MainCategoryMinAggregateInput;

    @Field(() => MainCategoryMaxAggregateInput, {nullable:true})
    _max?: MainCategoryMaxAggregateInput;
}

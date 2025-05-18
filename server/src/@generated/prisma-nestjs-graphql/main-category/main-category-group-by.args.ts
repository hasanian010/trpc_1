import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MainCategoryWhereInput } from './main-category-where.input';
import { Type } from 'class-transformer';
import { MainCategoryOrderByWithAggregationInput } from './main-category-order-by-with-aggregation.input';
import { MainCategoryScalarFieldEnum } from './main-category-scalar-field.enum';
import { MainCategoryScalarWhereWithAggregatesInput } from './main-category-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { MainCategoryCountAggregateInput } from './main-category-count-aggregate.input';
import { MainCategoryMinAggregateInput } from './main-category-min-aggregate.input';
import { MainCategoryMaxAggregateInput } from './main-category-max-aggregate.input';

@ArgsType()
export class MainCategoryGroupByArgs {

    @Field(() => MainCategoryWhereInput, {nullable:true})
    @Type(() => MainCategoryWhereInput)
    where?: MainCategoryWhereInput;

    @Field(() => [MainCategoryOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<MainCategoryOrderByWithAggregationInput>;

    @Field(() => [MainCategoryScalarFieldEnum], {nullable:false})
    by!: Array<`${MainCategoryScalarFieldEnum}`>;

    @Field(() => MainCategoryScalarWhereWithAggregatesInput, {nullable:true})
    having?: MainCategoryScalarWhereWithAggregatesInput;

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

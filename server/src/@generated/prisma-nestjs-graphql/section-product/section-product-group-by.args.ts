import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SectionProductWhereInput } from './section-product-where.input';
import { Type } from 'class-transformer';
import { SectionProductOrderByWithAggregationInput } from './section-product-order-by-with-aggregation.input';
import { SectionProductScalarFieldEnum } from './section-product-scalar-field.enum';
import { SectionProductScalarWhereWithAggregatesInput } from './section-product-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SectionProductCountAggregateInput } from './section-product-count-aggregate.input';
import { SectionProductMinAggregateInput } from './section-product-min-aggregate.input';
import { SectionProductMaxAggregateInput } from './section-product-max-aggregate.input';

@ArgsType()
export class SectionProductGroupByArgs {

    @Field(() => SectionProductWhereInput, {nullable:true})
    @Type(() => SectionProductWhereInput)
    where?: SectionProductWhereInput;

    @Field(() => [SectionProductOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SectionProductOrderByWithAggregationInput>;

    @Field(() => [SectionProductScalarFieldEnum], {nullable:false})
    by!: Array<`${SectionProductScalarFieldEnum}`>;

    @Field(() => SectionProductScalarWhereWithAggregatesInput, {nullable:true})
    having?: SectionProductScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SectionProductCountAggregateInput, {nullable:true})
    _count?: SectionProductCountAggregateInput;

    @Field(() => SectionProductMinAggregateInput, {nullable:true})
    _min?: SectionProductMinAggregateInput;

    @Field(() => SectionProductMaxAggregateInput, {nullable:true})
    _max?: SectionProductMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AttributeWhereInput } from './attribute-where.input';
import { Type } from 'class-transformer';
import { AttributeOrderByWithAggregationInput } from './attribute-order-by-with-aggregation.input';
import { AttributeScalarFieldEnum } from './attribute-scalar-field.enum';
import { AttributeScalarWhereWithAggregatesInput } from './attribute-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AttributeCountAggregateInput } from './attribute-count-aggregate.input';
import { AttributeMinAggregateInput } from './attribute-min-aggregate.input';
import { AttributeMaxAggregateInput } from './attribute-max-aggregate.input';

@ArgsType()
export class AttributeGroupByArgs {

    @Field(() => AttributeWhereInput, {nullable:true})
    @Type(() => AttributeWhereInput)
    where?: AttributeWhereInput;

    @Field(() => [AttributeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AttributeOrderByWithAggregationInput>;

    @Field(() => [AttributeScalarFieldEnum], {nullable:false})
    by!: Array<`${AttributeScalarFieldEnum}`>;

    @Field(() => AttributeScalarWhereWithAggregatesInput, {nullable:true})
    having?: AttributeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AttributeCountAggregateInput, {nullable:true})
    _count?: AttributeCountAggregateInput;

    @Field(() => AttributeMinAggregateInput, {nullable:true})
    _min?: AttributeMinAggregateInput;

    @Field(() => AttributeMaxAggregateInput, {nullable:true})
    _max?: AttributeMaxAggregateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeWhereInput } from './product-attribute-where.input';
import { Type } from 'class-transformer';
import { ProductAttributeOrderByWithAggregationInput } from './product-attribute-order-by-with-aggregation.input';
import { ProductAttributeScalarFieldEnum } from './product-attribute-scalar-field.enum';
import { ProductAttributeScalarWhereWithAggregatesInput } from './product-attribute-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductAttributeCountAggregateInput } from './product-attribute-count-aggregate.input';
import { ProductAttributeMinAggregateInput } from './product-attribute-min-aggregate.input';
import { ProductAttributeMaxAggregateInput } from './product-attribute-max-aggregate.input';

@ArgsType()
export class ProductAttributeGroupByArgs {

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    @Type(() => ProductAttributeWhereInput)
    where?: ProductAttributeWhereInput;

    @Field(() => [ProductAttributeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductAttributeOrderByWithAggregationInput>;

    @Field(() => [ProductAttributeScalarFieldEnum], {nullable:false})
    by!: Array<`${ProductAttributeScalarFieldEnum}`>;

    @Field(() => ProductAttributeScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductAttributeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductAttributeCountAggregateInput, {nullable:true})
    _count?: ProductAttributeCountAggregateInput;

    @Field(() => ProductAttributeMinAggregateInput, {nullable:true})
    _min?: ProductAttributeMinAggregateInput;

    @Field(() => ProductAttributeMaxAggregateInput, {nullable:true})
    _max?: ProductAttributeMaxAggregateInput;
}

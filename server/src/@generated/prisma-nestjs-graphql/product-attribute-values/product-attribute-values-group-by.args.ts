import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeValuesWhereInput } from './product-attribute-values-where.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesOrderByWithAggregationInput } from './product-attribute-values-order-by-with-aggregation.input';
import { ProductAttributeValuesScalarFieldEnum } from './product-attribute-values-scalar-field.enum';
import { ProductAttributeValuesScalarWhereWithAggregatesInput } from './product-attribute-values-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductAttributeValuesCountAggregateInput } from './product-attribute-values-count-aggregate.input';
import { ProductAttributeValuesMinAggregateInput } from './product-attribute-values-min-aggregate.input';
import { ProductAttributeValuesMaxAggregateInput } from './product-attribute-values-max-aggregate.input';

@ArgsType()
export class ProductAttributeValuesGroupByArgs {

    @Field(() => ProductAttributeValuesWhereInput, {nullable:true})
    @Type(() => ProductAttributeValuesWhereInput)
    where?: ProductAttributeValuesWhereInput;

    @Field(() => [ProductAttributeValuesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductAttributeValuesOrderByWithAggregationInput>;

    @Field(() => [ProductAttributeValuesScalarFieldEnum], {nullable:false})
    by!: Array<`${ProductAttributeValuesScalarFieldEnum}`>;

    @Field(() => ProductAttributeValuesScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductAttributeValuesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductAttributeValuesCountAggregateInput, {nullable:true})
    _count?: ProductAttributeValuesCountAggregateInput;

    @Field(() => ProductAttributeValuesMinAggregateInput, {nullable:true})
    _min?: ProductAttributeValuesMinAggregateInput;

    @Field(() => ProductAttributeValuesMaxAggregateInput, {nullable:true})
    _max?: ProductAttributeValuesMaxAggregateInput;
}

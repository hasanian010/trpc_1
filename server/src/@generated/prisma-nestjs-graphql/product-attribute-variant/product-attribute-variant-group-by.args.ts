import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeVariantWhereInput } from './product-attribute-variant-where.input';
import { Type } from 'class-transformer';
import { ProductAttributeVariantOrderByWithAggregationInput } from './product-attribute-variant-order-by-with-aggregation.input';
import { ProductAttributeVariantScalarFieldEnum } from './product-attribute-variant-scalar-field.enum';
import { ProductAttributeVariantScalarWhereWithAggregatesInput } from './product-attribute-variant-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductAttributeVariantCountAggregateInput } from './product-attribute-variant-count-aggregate.input';
import { ProductAttributeVariantMinAggregateInput } from './product-attribute-variant-min-aggregate.input';
import { ProductAttributeVariantMaxAggregateInput } from './product-attribute-variant-max-aggregate.input';

@ArgsType()
export class ProductAttributeVariantGroupByArgs {

    @Field(() => ProductAttributeVariantWhereInput, {nullable:true})
    @Type(() => ProductAttributeVariantWhereInput)
    where?: ProductAttributeVariantWhereInput;

    @Field(() => [ProductAttributeVariantOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductAttributeVariantOrderByWithAggregationInput>;

    @Field(() => [ProductAttributeVariantScalarFieldEnum], {nullable:false})
    by!: Array<`${ProductAttributeVariantScalarFieldEnum}`>;

    @Field(() => ProductAttributeVariantScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductAttributeVariantScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductAttributeVariantCountAggregateInput, {nullable:true})
    _count?: ProductAttributeVariantCountAggregateInput;

    @Field(() => ProductAttributeVariantMinAggregateInput, {nullable:true})
    _min?: ProductAttributeVariantMinAggregateInput;

    @Field(() => ProductAttributeVariantMaxAggregateInput, {nullable:true})
    _max?: ProductAttributeVariantMaxAggregateInput;
}

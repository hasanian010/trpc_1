import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductMetaWhereInput } from './product-meta-where.input';
import { Type } from 'class-transformer';
import { ProductMetaOrderByWithAggregationInput } from './product-meta-order-by-with-aggregation.input';
import { ProductMetaScalarFieldEnum } from './product-meta-scalar-field.enum';
import { ProductMetaScalarWhereWithAggregatesInput } from './product-meta-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductMetaCountAggregateInput } from './product-meta-count-aggregate.input';
import { ProductMetaMinAggregateInput } from './product-meta-min-aggregate.input';
import { ProductMetaMaxAggregateInput } from './product-meta-max-aggregate.input';

@ArgsType()
export class ProductMetaGroupByArgs {

    @Field(() => ProductMetaWhereInput, {nullable:true})
    @Type(() => ProductMetaWhereInput)
    where?: ProductMetaWhereInput;

    @Field(() => [ProductMetaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductMetaOrderByWithAggregationInput>;

    @Field(() => [ProductMetaScalarFieldEnum], {nullable:false})
    by!: Array<`${ProductMetaScalarFieldEnum}`>;

    @Field(() => ProductMetaScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductMetaScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductMetaCountAggregateInput, {nullable:true})
    _count?: ProductMetaCountAggregateInput;

    @Field(() => ProductMetaMinAggregateInput, {nullable:true})
    _min?: ProductMetaMinAggregateInput;

    @Field(() => ProductMetaMaxAggregateInput, {nullable:true})
    _max?: ProductMetaMaxAggregateInput;
}

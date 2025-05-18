import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductSpecificationWhereInput } from './product-specification-where.input';
import { Type } from 'class-transformer';
import { ProductSpecificationOrderByWithAggregationInput } from './product-specification-order-by-with-aggregation.input';
import { ProductSpecificationScalarFieldEnum } from './product-specification-scalar-field.enum';
import { ProductSpecificationScalarWhereWithAggregatesInput } from './product-specification-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ProductSpecificationCountAggregateInput } from './product-specification-count-aggregate.input';
import { ProductSpecificationMinAggregateInput } from './product-specification-min-aggregate.input';
import { ProductSpecificationMaxAggregateInput } from './product-specification-max-aggregate.input';

@ArgsType()
export class ProductSpecificationGroupByArgs {

    @Field(() => ProductSpecificationWhereInput, {nullable:true})
    @Type(() => ProductSpecificationWhereInput)
    where?: ProductSpecificationWhereInput;

    @Field(() => [ProductSpecificationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ProductSpecificationOrderByWithAggregationInput>;

    @Field(() => [ProductSpecificationScalarFieldEnum], {nullable:false})
    by!: Array<`${ProductSpecificationScalarFieldEnum}`>;

    @Field(() => ProductSpecificationScalarWhereWithAggregatesInput, {nullable:true})
    having?: ProductSpecificationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ProductSpecificationCountAggregateInput, {nullable:true})
    _count?: ProductSpecificationCountAggregateInput;

    @Field(() => ProductSpecificationMinAggregateInput, {nullable:true})
    _min?: ProductSpecificationMinAggregateInput;

    @Field(() => ProductSpecificationMaxAggregateInput, {nullable:true})
    _max?: ProductSpecificationMaxAggregateInput;
}

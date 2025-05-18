import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductSpecificationWhereInput } from './product-specification-where.input';
import { Type } from 'class-transformer';
import { ProductSpecificationOrderByWithRelationInput } from './product-specification-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductSpecificationWhereUniqueInput } from './product-specification-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductSpecificationCountAggregateInput } from './product-specification-count-aggregate.input';
import { ProductSpecificationMinAggregateInput } from './product-specification-min-aggregate.input';
import { ProductSpecificationMaxAggregateInput } from './product-specification-max-aggregate.input';

@ArgsType()
export class ProductSpecificationAggregateArgs {

    @Field(() => ProductSpecificationWhereInput, {nullable:true})
    @Type(() => ProductSpecificationWhereInput)
    where?: ProductSpecificationWhereInput;

    @Field(() => [ProductSpecificationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductSpecificationOrderByWithRelationInput>;

    @Field(() => ProductSpecificationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductSpecificationWhereUniqueInput, 'id'>;

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

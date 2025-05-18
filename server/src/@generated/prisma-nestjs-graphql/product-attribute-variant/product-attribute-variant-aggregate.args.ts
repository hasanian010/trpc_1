import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeVariantWhereInput } from './product-attribute-variant-where.input';
import { Type } from 'class-transformer';
import { ProductAttributeVariantOrderByWithRelationInput } from './product-attribute-variant-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeVariantWhereUniqueInput } from './product-attribute-variant-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductAttributeVariantCountAggregateInput } from './product-attribute-variant-count-aggregate.input';
import { ProductAttributeVariantMinAggregateInput } from './product-attribute-variant-min-aggregate.input';
import { ProductAttributeVariantMaxAggregateInput } from './product-attribute-variant-max-aggregate.input';

@ArgsType()
export class ProductAttributeVariantAggregateArgs {

    @Field(() => ProductAttributeVariantWhereInput, {nullable:true})
    @Type(() => ProductAttributeVariantWhereInput)
    where?: ProductAttributeVariantWhereInput;

    @Field(() => [ProductAttributeVariantOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductAttributeVariantOrderByWithRelationInput>;

    @Field(() => ProductAttributeVariantWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductAttributeVariantWhereUniqueInput, 'id'>;

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

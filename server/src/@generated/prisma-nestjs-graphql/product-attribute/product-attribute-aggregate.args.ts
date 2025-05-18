import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductAttributeWhereInput } from './product-attribute-where.input';
import { Type } from 'class-transformer';
import { ProductAttributeOrderByWithRelationInput } from './product-attribute-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductAttributeCountAggregateInput } from './product-attribute-count-aggregate.input';
import { ProductAttributeMinAggregateInput } from './product-attribute-min-aggregate.input';
import { ProductAttributeMaxAggregateInput } from './product-attribute-max-aggregate.input';

@ArgsType()
export class ProductAttributeAggregateArgs {

    @Field(() => ProductAttributeWhereInput, {nullable:true})
    @Type(() => ProductAttributeWhereInput)
    where?: ProductAttributeWhereInput;

    @Field(() => [ProductAttributeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductAttributeOrderByWithRelationInput>;

    @Field(() => ProductAttributeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>;

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

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductMetaWhereInput } from './product-meta-where.input';
import { Type } from 'class-transformer';
import { ProductMetaOrderByWithRelationInput } from './product-meta-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductMetaWhereUniqueInput } from './product-meta-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductMetaCountAggregateInput } from './product-meta-count-aggregate.input';
import { ProductMetaMinAggregateInput } from './product-meta-min-aggregate.input';
import { ProductMetaMaxAggregateInput } from './product-meta-max-aggregate.input';

@ArgsType()
export class ProductMetaAggregateArgs {

    @Field(() => ProductMetaWhereInput, {nullable:true})
    @Type(() => ProductMetaWhereInput)
    where?: ProductMetaWhereInput;

    @Field(() => [ProductMetaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProductMetaOrderByWithRelationInput>;

    @Field(() => ProductMetaWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProductMetaWhereUniqueInput, 'id' | 'productId'>;

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

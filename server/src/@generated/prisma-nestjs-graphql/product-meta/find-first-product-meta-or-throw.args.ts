import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProductMetaWhereInput } from './product-meta-where.input';
import { Type } from 'class-transformer';
import { ProductMetaOrderByWithRelationInput } from './product-meta-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProductMetaWhereUniqueInput } from './product-meta-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProductMetaScalarFieldEnum } from './product-meta-scalar-field.enum';

@ArgsType()
export class FindFirstProductMetaOrThrowArgs {

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

    @Field(() => [ProductMetaScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ProductMetaScalarFieldEnum}`>;
}

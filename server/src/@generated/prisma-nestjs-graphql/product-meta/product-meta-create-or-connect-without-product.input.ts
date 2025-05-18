import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProductMetaWhereUniqueInput } from './product-meta-where-unique.input';
import { Type } from 'class-transformer';
import { ProductMetaCreateWithoutProductInput } from './product-meta-create-without-product.input';

@InputType()
export class ProductMetaCreateOrConnectWithoutProductInput {

    @Field(() => ProductMetaWhereUniqueInput, {nullable:false})
    @Type(() => ProductMetaWhereUniqueInput)
    where!: Prisma.AtLeast<ProductMetaWhereUniqueInput, 'id' | 'productId'>;

    @Field(() => ProductMetaCreateWithoutProductInput, {nullable:false})
    @Type(() => ProductMetaCreateWithoutProductInput)
    create!: ProductMetaCreateWithoutProductInput;
}

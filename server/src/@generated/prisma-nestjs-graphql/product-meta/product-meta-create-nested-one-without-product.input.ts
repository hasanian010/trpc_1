import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductMetaCreateWithoutProductInput } from './product-meta-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductMetaCreateOrConnectWithoutProductInput } from './product-meta-create-or-connect-without-product.input';
import { Prisma } from '@prisma/client';
import { ProductMetaWhereUniqueInput } from './product-meta-where-unique.input';

@InputType()
export class ProductMetaCreateNestedOneWithoutProductInput {

    @Field(() => ProductMetaCreateWithoutProductInput, {nullable:true})
    @Type(() => ProductMetaCreateWithoutProductInput)
    create?: ProductMetaCreateWithoutProductInput;

    @Field(() => ProductMetaCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => ProductMetaCreateOrConnectWithoutProductInput)
    connectOrCreate?: ProductMetaCreateOrConnectWithoutProductInput;

    @Field(() => ProductMetaWhereUniqueInput, {nullable:true})
    @Type(() => ProductMetaWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductMetaWhereUniqueInput, 'id' | 'productId'>;
}

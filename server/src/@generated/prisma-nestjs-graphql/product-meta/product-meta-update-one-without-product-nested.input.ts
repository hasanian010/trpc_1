import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductMetaCreateWithoutProductInput } from './product-meta-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductMetaCreateOrConnectWithoutProductInput } from './product-meta-create-or-connect-without-product.input';
import { ProductMetaUpsertWithoutProductInput } from './product-meta-upsert-without-product.input';
import { ProductMetaWhereInput } from './product-meta-where.input';
import { Prisma } from '@prisma/client';
import { ProductMetaWhereUniqueInput } from './product-meta-where-unique.input';
import { ProductMetaUpdateToOneWithWhereWithoutProductInput } from './product-meta-update-to-one-with-where-without-product.input';

@InputType()
export class ProductMetaUpdateOneWithoutProductNestedInput {

    @Field(() => ProductMetaCreateWithoutProductInput, {nullable:true})
    @Type(() => ProductMetaCreateWithoutProductInput)
    create?: ProductMetaCreateWithoutProductInput;

    @Field(() => ProductMetaCreateOrConnectWithoutProductInput, {nullable:true})
    @Type(() => ProductMetaCreateOrConnectWithoutProductInput)
    connectOrCreate?: ProductMetaCreateOrConnectWithoutProductInput;

    @Field(() => ProductMetaUpsertWithoutProductInput, {nullable:true})
    @Type(() => ProductMetaUpsertWithoutProductInput)
    upsert?: ProductMetaUpsertWithoutProductInput;

    @Field(() => ProductMetaWhereInput, {nullable:true})
    @Type(() => ProductMetaWhereInput)
    disconnect?: ProductMetaWhereInput;

    @Field(() => ProductMetaWhereInput, {nullable:true})
    @Type(() => ProductMetaWhereInput)
    delete?: ProductMetaWhereInput;

    @Field(() => ProductMetaWhereUniqueInput, {nullable:true})
    @Type(() => ProductMetaWhereUniqueInput)
    connect?: Prisma.AtLeast<ProductMetaWhereUniqueInput, 'id' | 'productId'>;

    @Field(() => ProductMetaUpdateToOneWithWhereWithoutProductInput, {nullable:true})
    @Type(() => ProductMetaUpdateToOneWithWhereWithoutProductInput)
    update?: ProductMetaUpdateToOneWithWhereWithoutProductInput;
}

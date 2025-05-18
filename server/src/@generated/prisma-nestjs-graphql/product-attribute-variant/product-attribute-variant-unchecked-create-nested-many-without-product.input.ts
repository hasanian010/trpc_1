import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeVariantCreateWithoutProductInput } from './product-attribute-variant-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductAttributeVariantCreateOrConnectWithoutProductInput } from './product-attribute-variant-create-or-connect-without-product.input';
import { ProductAttributeVariantCreateManyProductInputEnvelope } from './product-attribute-variant-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeVariantWhereUniqueInput } from './product-attribute-variant-where-unique.input';

@InputType()
export class ProductAttributeVariantUncheckedCreateNestedManyWithoutProductInput {

    @Field(() => [ProductAttributeVariantCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeVariantCreateWithoutProductInput)
    create?: Array<ProductAttributeVariantCreateWithoutProductInput>;

    @Field(() => [ProductAttributeVariantCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeVariantCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductAttributeVariantCreateOrConnectWithoutProductInput>;

    @Field(() => ProductAttributeVariantCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductAttributeVariantCreateManyProductInputEnvelope)
    createMany?: ProductAttributeVariantCreateManyProductInputEnvelope;

    @Field(() => [ProductAttributeVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeVariantWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductAttributeVariantWhereUniqueInput, 'id'>>;
}

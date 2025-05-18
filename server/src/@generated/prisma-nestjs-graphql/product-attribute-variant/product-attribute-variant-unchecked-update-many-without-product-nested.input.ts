import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeVariantCreateWithoutProductInput } from './product-attribute-variant-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductAttributeVariantCreateOrConnectWithoutProductInput } from './product-attribute-variant-create-or-connect-without-product.input';
import { ProductAttributeVariantUpsertWithWhereUniqueWithoutProductInput } from './product-attribute-variant-upsert-with-where-unique-without-product.input';
import { ProductAttributeVariantCreateManyProductInputEnvelope } from './product-attribute-variant-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeVariantWhereUniqueInput } from './product-attribute-variant-where-unique.input';
import { ProductAttributeVariantUpdateWithWhereUniqueWithoutProductInput } from './product-attribute-variant-update-with-where-unique-without-product.input';
import { ProductAttributeVariantUpdateManyWithWhereWithoutProductInput } from './product-attribute-variant-update-many-with-where-without-product.input';
import { ProductAttributeVariantScalarWhereInput } from './product-attribute-variant-scalar-where.input';

@InputType()
export class ProductAttributeVariantUncheckedUpdateManyWithoutProductNestedInput {

    @Field(() => [ProductAttributeVariantCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeVariantCreateWithoutProductInput)
    create?: Array<ProductAttributeVariantCreateWithoutProductInput>;

    @Field(() => [ProductAttributeVariantCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeVariantCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductAttributeVariantCreateOrConnectWithoutProductInput>;

    @Field(() => [ProductAttributeVariantUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeVariantUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ProductAttributeVariantUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ProductAttributeVariantCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductAttributeVariantCreateManyProductInputEnvelope)
    createMany?: ProductAttributeVariantCreateManyProductInputEnvelope;

    @Field(() => [ProductAttributeVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeVariantWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductAttributeVariantWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeVariantWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductAttributeVariantWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeVariantWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductAttributeVariantWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeVariantWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductAttributeVariantWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeVariantUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeVariantUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ProductAttributeVariantUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ProductAttributeVariantUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeVariantUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ProductAttributeVariantUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ProductAttributeVariantScalarWhereInput], {nullable:true})
    @Type(() => ProductAttributeVariantScalarWhereInput)
    deleteMany?: Array<ProductAttributeVariantScalarWhereInput>;
}

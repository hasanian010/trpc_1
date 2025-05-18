import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeCreateWithoutProductInput } from './product-attribute-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateOrConnectWithoutProductInput } from './product-attribute-create-or-connect-without-product.input';
import { ProductAttributeUpsertWithWhereUniqueWithoutProductInput } from './product-attribute-upsert-with-where-unique-without-product.input';
import { ProductAttributeCreateManyProductInputEnvelope } from './product-attribute-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';
import { ProductAttributeUpdateWithWhereUniqueWithoutProductInput } from './product-attribute-update-with-where-unique-without-product.input';
import { ProductAttributeUpdateManyWithWhereWithoutProductInput } from './product-attribute-update-many-with-where-without-product.input';
import { ProductAttributeScalarWhereInput } from './product-attribute-scalar-where.input';

@InputType()
export class ProductAttributeUpdateManyWithoutProductNestedInput {

    @Field(() => [ProductAttributeCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeCreateWithoutProductInput)
    create?: Array<ProductAttributeCreateWithoutProductInput>;

    @Field(() => [ProductAttributeCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductAttributeCreateOrConnectWithoutProductInput>;

    @Field(() => [ProductAttributeUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ProductAttributeUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ProductAttributeCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductAttributeCreateManyProductInputEnvelope)
    createMany?: ProductAttributeCreateManyProductInputEnvelope;

    @Field(() => [ProductAttributeWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ProductAttributeUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ProductAttributeUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ProductAttributeUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ProductAttributeScalarWhereInput], {nullable:true})
    @Type(() => ProductAttributeScalarWhereInput)
    deleteMany?: Array<ProductAttributeScalarWhereInput>;
}

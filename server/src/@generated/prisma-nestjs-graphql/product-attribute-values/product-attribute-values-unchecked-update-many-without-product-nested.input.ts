import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeValuesCreateWithoutProductInput } from './product-attribute-values-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesCreateOrConnectWithoutProductInput } from './product-attribute-values-create-or-connect-without-product.input';
import { ProductAttributeValuesUpsertWithWhereUniqueWithoutProductInput } from './product-attribute-values-upsert-with-where-unique-without-product.input';
import { ProductAttributeValuesCreateManyProductInputEnvelope } from './product-attribute-values-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeValuesWhereUniqueInput } from './product-attribute-values-where-unique.input';
import { ProductAttributeValuesUpdateWithWhereUniqueWithoutProductInput } from './product-attribute-values-update-with-where-unique-without-product.input';
import { ProductAttributeValuesUpdateManyWithWhereWithoutProductInput } from './product-attribute-values-update-many-with-where-without-product.input';
import { ProductAttributeValuesScalarWhereInput } from './product-attribute-values-scalar-where.input';

@InputType()
export class ProductAttributeValuesUncheckedUpdateManyWithoutProductNestedInput {

    @Field(() => [ProductAttributeValuesCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeValuesCreateWithoutProductInput)
    create?: Array<ProductAttributeValuesCreateWithoutProductInput>;

    @Field(() => [ProductAttributeValuesCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeValuesCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductAttributeValuesCreateOrConnectWithoutProductInput>;

    @Field(() => [ProductAttributeValuesUpsertWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeValuesUpsertWithWhereUniqueWithoutProductInput)
    upsert?: Array<ProductAttributeValuesUpsertWithWhereUniqueWithoutProductInput>;

    @Field(() => ProductAttributeValuesCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductAttributeValuesCreateManyProductInputEnvelope)
    createMany?: ProductAttributeValuesCreateManyProductInputEnvelope;

    @Field(() => [ProductAttributeValuesWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeValuesWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeValuesWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeValuesWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>>;

    @Field(() => [ProductAttributeValuesUpdateWithWhereUniqueWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeValuesUpdateWithWhereUniqueWithoutProductInput)
    update?: Array<ProductAttributeValuesUpdateWithWhereUniqueWithoutProductInput>;

    @Field(() => [ProductAttributeValuesUpdateManyWithWhereWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeValuesUpdateManyWithWhereWithoutProductInput)
    updateMany?: Array<ProductAttributeValuesUpdateManyWithWhereWithoutProductInput>;

    @Field(() => [ProductAttributeValuesScalarWhereInput], {nullable:true})
    @Type(() => ProductAttributeValuesScalarWhereInput)
    deleteMany?: Array<ProductAttributeValuesScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeVariantCreateWithoutProductAttributeInput } from './product-attribute-variant-create-without-product-attribute.input';
import { Type } from 'class-transformer';
import { ProductAttributeVariantCreateOrConnectWithoutProductAttributeInput } from './product-attribute-variant-create-or-connect-without-product-attribute.input';
import { ProductAttributeVariantUpsertWithWhereUniqueWithoutProductAttributeInput } from './product-attribute-variant-upsert-with-where-unique-without-product-attribute.input';
import { ProductAttributeVariantCreateManyProductAttributeInputEnvelope } from './product-attribute-variant-create-many-product-attribute-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeVariantWhereUniqueInput } from './product-attribute-variant-where-unique.input';
import { ProductAttributeVariantUpdateWithWhereUniqueWithoutProductAttributeInput } from './product-attribute-variant-update-with-where-unique-without-product-attribute.input';
import { ProductAttributeVariantUpdateManyWithWhereWithoutProductAttributeInput } from './product-attribute-variant-update-many-with-where-without-product-attribute.input';
import { ProductAttributeVariantScalarWhereInput } from './product-attribute-variant-scalar-where.input';

@InputType()
export class ProductAttributeVariantUncheckedUpdateManyWithoutProductAttributeNestedInput {

    @Field(() => [ProductAttributeVariantCreateWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeVariantCreateWithoutProductAttributeInput)
    create?: Array<ProductAttributeVariantCreateWithoutProductAttributeInput>;

    @Field(() => [ProductAttributeVariantCreateOrConnectWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeVariantCreateOrConnectWithoutProductAttributeInput)
    connectOrCreate?: Array<ProductAttributeVariantCreateOrConnectWithoutProductAttributeInput>;

    @Field(() => [ProductAttributeVariantUpsertWithWhereUniqueWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeVariantUpsertWithWhereUniqueWithoutProductAttributeInput)
    upsert?: Array<ProductAttributeVariantUpsertWithWhereUniqueWithoutProductAttributeInput>;

    @Field(() => ProductAttributeVariantCreateManyProductAttributeInputEnvelope, {nullable:true})
    @Type(() => ProductAttributeVariantCreateManyProductAttributeInputEnvelope)
    createMany?: ProductAttributeVariantCreateManyProductAttributeInputEnvelope;

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

    @Field(() => [ProductAttributeVariantUpdateWithWhereUniqueWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeVariantUpdateWithWhereUniqueWithoutProductAttributeInput)
    update?: Array<ProductAttributeVariantUpdateWithWhereUniqueWithoutProductAttributeInput>;

    @Field(() => [ProductAttributeVariantUpdateManyWithWhereWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeVariantUpdateManyWithWhereWithoutProductAttributeInput)
    updateMany?: Array<ProductAttributeVariantUpdateManyWithWhereWithoutProductAttributeInput>;

    @Field(() => [ProductAttributeVariantScalarWhereInput], {nullable:true})
    @Type(() => ProductAttributeVariantScalarWhereInput)
    deleteMany?: Array<ProductAttributeVariantScalarWhereInput>;
}

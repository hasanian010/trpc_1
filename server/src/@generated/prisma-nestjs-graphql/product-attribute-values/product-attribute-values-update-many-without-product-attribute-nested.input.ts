import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeValuesCreateWithoutProductAttributeInput } from './product-attribute-values-create-without-product-attribute.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesCreateOrConnectWithoutProductAttributeInput } from './product-attribute-values-create-or-connect-without-product-attribute.input';
import { ProductAttributeValuesUpsertWithWhereUniqueWithoutProductAttributeInput } from './product-attribute-values-upsert-with-where-unique-without-product-attribute.input';
import { ProductAttributeValuesCreateManyProductAttributeInputEnvelope } from './product-attribute-values-create-many-product-attribute-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeValuesWhereUniqueInput } from './product-attribute-values-where-unique.input';
import { ProductAttributeValuesUpdateWithWhereUniqueWithoutProductAttributeInput } from './product-attribute-values-update-with-where-unique-without-product-attribute.input';
import { ProductAttributeValuesUpdateManyWithWhereWithoutProductAttributeInput } from './product-attribute-values-update-many-with-where-without-product-attribute.input';
import { ProductAttributeValuesScalarWhereInput } from './product-attribute-values-scalar-where.input';

@InputType()
export class ProductAttributeValuesUpdateManyWithoutProductAttributeNestedInput {

    @Field(() => [ProductAttributeValuesCreateWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeValuesCreateWithoutProductAttributeInput)
    create?: Array<ProductAttributeValuesCreateWithoutProductAttributeInput>;

    @Field(() => [ProductAttributeValuesCreateOrConnectWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeValuesCreateOrConnectWithoutProductAttributeInput)
    connectOrCreate?: Array<ProductAttributeValuesCreateOrConnectWithoutProductAttributeInput>;

    @Field(() => [ProductAttributeValuesUpsertWithWhereUniqueWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeValuesUpsertWithWhereUniqueWithoutProductAttributeInput)
    upsert?: Array<ProductAttributeValuesUpsertWithWhereUniqueWithoutProductAttributeInput>;

    @Field(() => ProductAttributeValuesCreateManyProductAttributeInputEnvelope, {nullable:true})
    @Type(() => ProductAttributeValuesCreateManyProductAttributeInputEnvelope)
    createMany?: ProductAttributeValuesCreateManyProductAttributeInputEnvelope;

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

    @Field(() => [ProductAttributeValuesUpdateWithWhereUniqueWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeValuesUpdateWithWhereUniqueWithoutProductAttributeInput)
    update?: Array<ProductAttributeValuesUpdateWithWhereUniqueWithoutProductAttributeInput>;

    @Field(() => [ProductAttributeValuesUpdateManyWithWhereWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeValuesUpdateManyWithWhereWithoutProductAttributeInput)
    updateMany?: Array<ProductAttributeValuesUpdateManyWithWhereWithoutProductAttributeInput>;

    @Field(() => [ProductAttributeValuesScalarWhereInput], {nullable:true})
    @Type(() => ProductAttributeValuesScalarWhereInput)
    deleteMany?: Array<ProductAttributeValuesScalarWhereInput>;
}

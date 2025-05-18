import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeVariantCreateWithoutProductAttributeInput } from './product-attribute-variant-create-without-product-attribute.input';
import { Type } from 'class-transformer';
import { ProductAttributeVariantCreateOrConnectWithoutProductAttributeInput } from './product-attribute-variant-create-or-connect-without-product-attribute.input';
import { ProductAttributeVariantCreateManyProductAttributeInputEnvelope } from './product-attribute-variant-create-many-product-attribute-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeVariantWhereUniqueInput } from './product-attribute-variant-where-unique.input';

@InputType()
export class ProductAttributeVariantUncheckedCreateNestedManyWithoutProductAttributeInput {

    @Field(() => [ProductAttributeVariantCreateWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeVariantCreateWithoutProductAttributeInput)
    create?: Array<ProductAttributeVariantCreateWithoutProductAttributeInput>;

    @Field(() => [ProductAttributeVariantCreateOrConnectWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeVariantCreateOrConnectWithoutProductAttributeInput)
    connectOrCreate?: Array<ProductAttributeVariantCreateOrConnectWithoutProductAttributeInput>;

    @Field(() => ProductAttributeVariantCreateManyProductAttributeInputEnvelope, {nullable:true})
    @Type(() => ProductAttributeVariantCreateManyProductAttributeInputEnvelope)
    createMany?: ProductAttributeVariantCreateManyProductAttributeInputEnvelope;

    @Field(() => [ProductAttributeVariantWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeVariantWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductAttributeVariantWhereUniqueInput, 'id'>>;
}

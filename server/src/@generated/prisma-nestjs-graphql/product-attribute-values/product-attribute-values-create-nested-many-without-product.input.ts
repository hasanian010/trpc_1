import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeValuesCreateWithoutProductInput } from './product-attribute-values-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesCreateOrConnectWithoutProductInput } from './product-attribute-values-create-or-connect-without-product.input';
import { ProductAttributeValuesCreateManyProductInputEnvelope } from './product-attribute-values-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeValuesWhereUniqueInput } from './product-attribute-values-where-unique.input';

@InputType()
export class ProductAttributeValuesCreateNestedManyWithoutProductInput {

    @Field(() => [ProductAttributeValuesCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeValuesCreateWithoutProductInput)
    create?: Array<ProductAttributeValuesCreateWithoutProductInput>;

    @Field(() => [ProductAttributeValuesCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeValuesCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductAttributeValuesCreateOrConnectWithoutProductInput>;

    @Field(() => ProductAttributeValuesCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductAttributeValuesCreateManyProductInputEnvelope)
    createMany?: ProductAttributeValuesCreateManyProductInputEnvelope;

    @Field(() => [ProductAttributeValuesWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>>;
}

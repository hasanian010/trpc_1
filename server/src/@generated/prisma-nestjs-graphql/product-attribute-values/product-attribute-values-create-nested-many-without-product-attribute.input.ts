import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeValuesCreateWithoutProductAttributeInput } from './product-attribute-values-create-without-product-attribute.input';
import { Type } from 'class-transformer';
import { ProductAttributeValuesCreateOrConnectWithoutProductAttributeInput } from './product-attribute-values-create-or-connect-without-product-attribute.input';
import { ProductAttributeValuesCreateManyProductAttributeInputEnvelope } from './product-attribute-values-create-many-product-attribute-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeValuesWhereUniqueInput } from './product-attribute-values-where-unique.input';

@InputType()
export class ProductAttributeValuesCreateNestedManyWithoutProductAttributeInput {

    @Field(() => [ProductAttributeValuesCreateWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeValuesCreateWithoutProductAttributeInput)
    create?: Array<ProductAttributeValuesCreateWithoutProductAttributeInput>;

    @Field(() => [ProductAttributeValuesCreateOrConnectWithoutProductAttributeInput], {nullable:true})
    @Type(() => ProductAttributeValuesCreateOrConnectWithoutProductAttributeInput)
    connectOrCreate?: Array<ProductAttributeValuesCreateOrConnectWithoutProductAttributeInput>;

    @Field(() => ProductAttributeValuesCreateManyProductAttributeInputEnvelope, {nullable:true})
    @Type(() => ProductAttributeValuesCreateManyProductAttributeInputEnvelope)
    createMany?: ProductAttributeValuesCreateManyProductAttributeInputEnvelope;

    @Field(() => [ProductAttributeValuesWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeValuesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductAttributeValuesWhereUniqueInput, 'id'>>;
}

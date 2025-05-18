import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductAttributeCreateWithoutProductInput } from './product-attribute-create-without-product.input';
import { Type } from 'class-transformer';
import { ProductAttributeCreateOrConnectWithoutProductInput } from './product-attribute-create-or-connect-without-product.input';
import { ProductAttributeCreateManyProductInputEnvelope } from './product-attribute-create-many-product-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProductAttributeWhereUniqueInput } from './product-attribute-where-unique.input';

@InputType()
export class ProductAttributeUncheckedCreateNestedManyWithoutProductInput {

    @Field(() => [ProductAttributeCreateWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeCreateWithoutProductInput)
    create?: Array<ProductAttributeCreateWithoutProductInput>;

    @Field(() => [ProductAttributeCreateOrConnectWithoutProductInput], {nullable:true})
    @Type(() => ProductAttributeCreateOrConnectWithoutProductInput)
    connectOrCreate?: Array<ProductAttributeCreateOrConnectWithoutProductInput>;

    @Field(() => ProductAttributeCreateManyProductInputEnvelope, {nullable:true})
    @Type(() => ProductAttributeCreateManyProductInputEnvelope)
    createMany?: ProductAttributeCreateManyProductInputEnvelope;

    @Field(() => [ProductAttributeWhereUniqueInput], {nullable:true})
    @Type(() => ProductAttributeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductAttributeWhereUniqueInput, 'id'>>;
}
